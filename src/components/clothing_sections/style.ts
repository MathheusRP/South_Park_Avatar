import styled from "styled-components";

export const ClothingSectionStyle = styled.section`
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

    ul {
        display: flex;
        flex-direction: row;
        gap: 25px;
                
        /* width: 100%; */

        li {
            height: 100px;
            width: 100px;
            /* background-color: brown; */
            border-radius: 8px;
            /* opacity: 70%; */
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
                /* object-fit: cover; */
                /* box-shadow: 0px 5px 0px rgb(0, 0, 0, 0.4); */
            }
        }
    }

    @media (max-width: 1200px) {
        &::-webkit-scrollbar{
            display: none;
        }
        border-bottom: 4px solid var(--grey);
    }
`