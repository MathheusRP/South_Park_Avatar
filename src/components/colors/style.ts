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
    transition: 1s;
    z-index: 20;

    &.close {
        transform: translateY(120%);
        transition: 1s;

        button {
            top: -160px;
            transition: 1.3s;
        }
    }

    &.off {
        display: none;
    }

    button {
        height: 75px;
        width: 75px;
        font-size: 40px;
        border: 4px solid var(--primaryColor);
        border-radius: 50%;
        color: var(--primaryColor);
        position: absolute;
        margin: 0px auto;
        top: -40px;
        align-self: center;
        background-color: rgb(200, 200, 200);
        box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.4);
        transition: 1s;
        cursor: pointer;
    }

    .colorContainer {
        display: flex;

        .color {
            width: 100px;
            height: 100px;
            border: none;
            border-radius: 50%;
                
            &::-webkit-color-swatch {
                border-radius: 50%;
            }
        }
    }

    ul {
        display: flex;
        height: 100%;
        width: 100%;
        padding: 50px 15px 15px 15px;
        flex-wrap: wrap;
        
        li {
            width: 50px;

        }

        .noColor {
            position: relative;
            /* display: flex; */

           span {
            border: 2px solid red;
            height: 100%;
            position: absolute;
            transform: rotate(45deg);
            /* right: 0px; */
            left: 20px;
           }
            
        }
    }


    @media (max-width: 1200px) {
        
        button {
            transform: scale(0.7);
        }
    }
`