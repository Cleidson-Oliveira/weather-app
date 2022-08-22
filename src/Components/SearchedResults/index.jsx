import { Wrapper, CityName, TempInfo, OtherInfo, NextDaysInfo} from "./style";

import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

const targetDay = ( day ) => {
    const date = new Date();
    return diasSemana[date.getDay() + day < 7 ? date.getDay() + day : date.getDay() + day - 7];
    
}

export default function SearchedResults({ data }) {

    const {
        nome,
        temp,
        condition,
        minTemp,
        maxTemp,
        minTemp1,
        maxTemp1,
        minTemp2,
        maxTemp2,
        sensation,
        wind,
        humidity
    } = data

    return (
        <Wrapper>
            <CityName>{nome}</CityName>
            <TempInfo>{temp}°C {condition.name} <img src={condition.img}/></TempInfo>
            <OtherInfo>
                <div><AiOutlineArrowDown />{minTemp}°C <AiOutlineArrowUp />{maxTemp}°C</div>
                <div>Sensação: {sensation}°C</div>
                <div>Vento: {wind}Km/h</div>
                <div>Humidade: {humidity}%</div>
            </OtherInfo>
            <NextDaysInfo>
                <div>
                    <p>{targetDay(0)}</p>
                    <p>{minTemp.toFixed()}°</p>
                    <p>{maxTemp.toFixed()}°</p>
                </div>
                <div>
                    <p>{targetDay(1)}</p>
                    <p>{minTemp1.toFixed()}°</p>
                    <p>{maxTemp1.toFixed()}°</p>
                </div>
                <div>
                    <p>{targetDay(2)}</p>
                    <p>{minTemp2.toFixed()}°</p>
                    <p>{maxTemp2.toFixed()}°</p>
                </div>
            </NextDaysInfo>
        </Wrapper>
    )
}