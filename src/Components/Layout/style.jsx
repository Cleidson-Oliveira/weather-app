import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;


export const Load = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 200px;

    & {
        font-size: 3em;

        animation: ${rotate} 2s linear infinite;
    }
`;