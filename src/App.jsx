import { useState, useEffect, lazy, Suspense } from "react";

import axios from "axios";

import { GlobalStyle, Wrapper } from "./style";
import { Title } from "./Components/Titles/index";
import Search from "./Components/Search";
import SearchedResults from "./Components/SearchedResults";
import { Loading } from "./Components/Layout";

const Capitais = lazy(() => import("./Components/Capitais"));

let CitiesList = [
  "Salvador",
  "Rio de Janeiro",
  "São Paulo",
  "Brasília",
  "Belo Horizonte",
  "Belém",
  "Curitiba",
  "Fortaleza",
  "João Pessoa",
  "Manaus"
];

const options = (cityName) => {
  return {
    method: 'GET',
    url: 'http://api.weatherapi.com/v1/forecast.json',
    params: {
      lang: 'pt',
      key: "e4ebcca510d94664974172209222804",
      q: cityName,
      days: 5
    },
  }
};

export default function App() {

  const [ capitais, setCapitais ] = useState([]);
  const [ search, setsearch ] = useState();
  
  useEffect(() => {
    if (capitais[0] == undefined) {
      requisição()      
    }
  }, [])

  const handleState = (capital) => {
    setCapitais(prevState => {
      let q = [...prevState, {...capital}];

      return q  
    })
  }

  const requisição = () => {
    CitiesList.forEach((element) => {
  
      axios.request(options(element))
        .then(function (response) {
          let { maxtemp_c, mintemp_c } = response.data.forecast.forecastday[0].day
          let capital = {
            nome: element,
            min: mintemp_c,
            max: maxtemp_c 
          }
          handleState(capital);
        })
        .catch(function (error) {
          console.error(error);
      });
    })
    CitiesList = [];
  }

  const searchByCity = (city) => {
    axios.request(options(city))
      .then(function (response) {
        const {current, forecast, location} = response.data
        let result = {
          nome: `${location.name}, ${location.region} - ${location.country}`,
          temp: current.temp_c,
          wind: current.wind_kph,
          condition: {name: current.condition.text, img: current.condition.icon},
          humidity: current.humidity,
          sensation: current.feelslike_c,
          maxTemp: forecast.forecastday[0].day.maxtemp_c,
          minTemp: forecast.forecastday[0].day.mintemp_c,
          maxTemp1: forecast.forecastday[1].day.maxtemp_c,
          minTemp1: forecast.forecastday[1].day.mintemp_c,
          maxTemp2: forecast.forecastday[2].day.maxtemp_c,
          minTemp2: forecast.forecastday[2].day.mintemp_c,
        }
        setsearch(result)
      })
      .catch(function (error) {
        console.error(error);
    });
    
  }
  
  return (
    <Wrapper>
      <Title />
      {search && <SearchedResults data={search}/>}
      <Search search={searchByCity}/>
      <Suspense fallback={<Loading />}>
        <Capitais dataCapitais={capitais} />
      </Suspense>
      <GlobalStyle />
    </Wrapper>
  )
}