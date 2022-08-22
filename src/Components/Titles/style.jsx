import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 170px;
    min-width: 340px;

    & h1 {
        font-size: 4em;
        font-family: sans-serif;
        color: white;
    }

    @media only screen and (max-width: 600px) {
        height: 120px;
        & h1 {
            font-size: 2em;
        }
    }
`;