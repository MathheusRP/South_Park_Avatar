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
            display: flex;
            overflow-x: scroll;
            

            &::-webkit-scrollbar{
                background-color: var(--grey);
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
            overflow-y: auto;
            overflow-x: hidden;

            .container {
                position: relative;

                .circle {
                    height: 145px;
                    width: 145px;
                    background-color: var(--grey);
                    position: absolute;
                    z-index: 0;
                    top: 34px;
                    left: 18px;
                    border-radius: 50%; 
                }

                .icon {
                    position: absolute;
                    top: 0px;
                    width: 100%;
                }
            }
            
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
                cursor: pointer;  
            }
        }
    }

    .viewer {
        width: 50%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        .Window {
            margin-top: 300px;
            width: 80%;
            max-width: 400px;
            height: 800px;
            border-radius: 32px;
            display: flex;
            justify-content: center;
            position: relative;
        }
    }

`