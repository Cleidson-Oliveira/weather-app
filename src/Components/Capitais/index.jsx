import { Wrapper } from "./style";

export default function Capitais ({ dataCapitais }) {
    return (
        <Wrapper>
            <h2>Capitais</h2>
            <span>Min Max</span>
            <span>Min Max</span>
            {
                dataCapitais.map(element => (
                    <div key={element.nome}>
                        <span>
                            {`${element.min.toFixed()}° ${element.max.toFixed()}°`}
                        </span> 
                        <p>
                            {element.nome}
                        </p>
                    </div>
                ))
            }
        </Wrapper>
    )
}