import styled from "styled-components";

export const ColorsListStyled = styled.section`

    height: 300px;
    width: 100%;
    background-color: rgb(200, 200, 200);
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    border: 4px solid var(--primaryColor);
    border-bottom: none;
    border-radius: 16px 16px 0px 0px;

    button {
        height: 75px;
        width: 75px;
        font-size: 40px;
        border: 4px solid var(--primaryColor);
        border-radius: 50%;
        color: var(--primaryColor);
        position: absolute;
        margin: 0px auto;
        /* left: 20px;
        right: auto; */
        top: -40px;
        align-self: center;
        background-color: rgb(200, 200, 200);
        box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.4);

    }

    ul {
        display: flex;
        height: 100%;
        width: 100%;
        padding: 50px 15px 15px 15px;
        flex-wrap: wrap;
        
        

        li {
            width: 50px;
            /* height: 20px; */
        }
    }
`