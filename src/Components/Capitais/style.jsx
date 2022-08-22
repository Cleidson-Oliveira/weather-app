import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(8, 40px);
    width: 70%;
    min-width: 400px;
    position: relative;
    padding: 30px 25px;
    border-top: 1px solid white;

    & h2 {
        font-family: sans-serif;
        color: white;
        grid-column: 1/3;
        grid-row: 1/3;
        font-weight: 700;
        font-size: 2.5em;
    }

    & span {
        font-size: 1em;
        word-spacing: 1em;
        width: 100px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        font-weight: 700;
    }
    
    & P {
        display: inline-flex;
        font-family: sans-serif;
        font-size: 1em;
        font-weight: 700;
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-width: unset;
        padding: 20px;
        box-sizing: border-box;

        & div {
            display: flex;
            align-items: center;
            height: 40px;
        }

        & span {
            display: flex;
            align-items: center;
            height: 40px;

            & ~ span {
                display: none;
            }
        }
    }
`;