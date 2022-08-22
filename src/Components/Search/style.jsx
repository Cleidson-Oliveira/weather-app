import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    min-width: 340px;
    position: relative;
    margin-bottom: 50px;

    input {
        width: 100%;
        height: 60px;
        font-size: 1.3em;
        padding-left: 20px;
        outline: none;
    }

    button {
        display: flex;
        align-items: center;
        position: absolute;
        right: 10px;
        background: none;
        border: none;
        cursor: pointer;

        & {
            font-size: 1.7em;
        }
    }

    @media only screen and (max-width: 600px) {
        width: 95%;
        margin-bottom: 20px;
    }
`;