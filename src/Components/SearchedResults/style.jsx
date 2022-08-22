import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 70%;
    min-width: 340px;
    padding: 15px 20px 0;
    background: #ffffff90;
    box-sizing: border-box;
    margin-bottom: 15px;

    & {
        font-family: sans-serif;
    }

    & > div {
        padding: 15px 0;
        box-sizing: border-box;
    }

    @media only screen and (max-width: 600px) {
        width: 95%;
        padding: 15px 30px 0;
    }
`;

export const CityName = styled.div`
    
`;
export const TempInfo = styled.div`
    font-size: 1.8em;

    & img {
        height: 30px;
        width: 30px;
    }
`;
export const OtherInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-row-gap: 15px;

    & div {
        width: 100%;
    }
`;

export const NextDaysInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 5%;
    justify-items: center;
    border-top: solid 1px #ff9900;

    & div {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(2, 25px);
        align-items: center;
        justify-items: center;

        & > :first-child {
            grid-column: 1/3;

            & ~ p {
                font-weight: bold;
                color: #ff9900;
            }
        }
    }
`;