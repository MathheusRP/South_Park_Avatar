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
        }

        .options {
            width: 100%;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;

            .container {
                position: relative;
                height: 150px;
                margin-bottom: 50px;
                /* background-color: aqua; */
                

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
                    z-index: 5;
                }

                &.shirt {
                    height: 245px;
                    
                    .icon {
                        top: 36px;
                        width: 100%;
                    }
                } 
            }

            

            .container.eyes {
                .icon {
                    top: 25px;
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
                /* display: flex; */
                /* flex-wrap: wrap; */
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
            width: 100%;
            max-width: 400px;
            height: 800px;
            border-radius: 32px;
            display: flex;
            justify-content: center;
            position: relative;
        }
    }

    @media (max-width: 1200px) {
        /* background-color: aqua; */
        flex-direction: column-reverse;

        .clothingSection {
            height: 40vh;
            width: 100%;
            max-width: 1200px;
            z-index: 20;
            box-shadow: 0px -10px 10px rgb(0, 0, 0, 0.3);

            
            .menu {
                overflow-y: hidden;

                &::-webkit-scrollbar{
                display: none;
            }   
            }

            .options {
                overflow-x: scroll;
                /* width: 100%; */
                display: flex;
                /* align-items: center; */
                overflow-y: hidden;
                /* overflow-x: scroll; */
                
                &::-webkit-scrollbar{
                    /* display: none; */
                }
                
                /* flex-wrap: nowrap; */

                .optionsList {
                   /* display: flex; */
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    gap: 20px;
                    justify-content: start;
                    /* align-items: end; */
                    height: fit-content;

                    .container {
                        /* background-color: aqua; */
                        /* display: grid;
                        grid-template-columns: 175px 175px 175px;
                        grid-row-gap: 25px;
                        padding-right: 15px;
                        justify-content: space-between;
                        cursor: pointer;   */
                        transform: scale(0.7);
                        margin-bottom: 10px;

                        height: 175px;
                        width: 175px;

                        .circle {
                            /* background-color: aqua; */
                            /* transform: scale(0.7); */
                        }

                        &.shirt {
                            transform: scale(0.8) translateY(-20px);
                                                        
                        }

                    }

                    
                }
            }

        }

        .viewer {
            height: 60vh;
            width: 100vw;
            transform: scale(0.7);
            
        }
    }

`