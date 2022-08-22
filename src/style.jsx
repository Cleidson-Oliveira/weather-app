import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    html, body {
        min-height: 100vh;
    }
    body {
        background-image: linear-gradient(to top,#ffbb00,#ff7f00);
    }
`;

export const Wrapper = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    min-height: 100vh;
    margin: auto;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;