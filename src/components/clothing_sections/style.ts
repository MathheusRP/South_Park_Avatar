import styled from "styled-components";

export const ClothingSectionStyle = styled.section`
    width: 100%;
    height: 150px;
    display: flex;
    overflow-x: scroll;
    position: relative;

    &::-webkit-scrollbar{
        background-color: var(--grey);
        height: 10px;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primaryColor);
        border-radius: 5px;
    }

    ul {
        display: flex;

        li {
            height: 100px;
            width: 125px;
            display: flex;
            justify-content: center;
            border-radius: 8px;
            cursor: pointer;

            img {
                width: 100px;
                height: 100%;
            }
        }
    }

    .left {
        position: sticky;
        left: -10px;
    }

    .right {
        position: sticky;
        right: -10px;
       
    }

    @media (max-width: 1200px) {

        &::-webkit-scrollbar{
            display: none;
        }
        border-bottom: 4px solid var(--grey);
    }
`