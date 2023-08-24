import styled from "styled-components";

export const HomeStyled = styled.section`
    display: flex;

    .clothingSection {
        height: 100vh;
        min-width: 300px;
        width: 50%;
        max-width: 700px;
        background-color: var(--black);
        padding: 16px;
        position: relative;
        display: flex;
        flex-direction: column;
        box-shadow: 5px 0px 10px rgb(0, 0, 0, 0.3);
        gap: 15px;
        

        .menu {
            width: 100%;
            height: 150px;
            /* border-bottom: 4px solid var(--grey); */
            display: flex;
            /* border: solid red 2px; */
            overflow-x: scroll;
            

            &::-webkit-scrollbar{
                background-color: var(--grey);
                /* width: 5px; */
                height: 10px;
                border-radius: 5px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: var(--primaryColor);
                border-radius: 5px;
            }

           
        }

        .options {
            width: 100%;
            height: 100%;
            /* border: solid red 2px; */
            overflow-y: auto;
            overflow-x: hidden;
            
            &::-webkit-scrollbar{
                background-color: var(--grey);
                width: 10px;
                border-radius: 5px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: var(--primaryColor);
                border-radius: 5px;
            }

            .optionsList {
                display: flex;
                flex-wrap: wrap;
                display: grid;
                grid-template-columns: 175px 175px 175px;
                grid-row-gap: 25px;
                padding-right: 15px;
                justify-content: space-between;
                
            }
        }
    }

    .viewer {
        width: 50%;
        height: 100vh;
        /* border: solid red 4px; */
        display: flex;
        align-items: center;
        justify-content: center;

        .Window {
            width: 80%;
            max-width: 500px;
            /* min-width: 500px; */
            height: 800px;
            /* background-color: var(--black); */
            /* border: 6px solid var(--primaryColor); */
            border-radius: 32px;
            display: flex;
            justify-content: center;
            position: relative;
            
            /* filter: brightness(1.2); */
        }
    }

`