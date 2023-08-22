import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    body {
        background-color: rgb(134, 161, 214);
        overflow: hidden;
    }

    ul, li {
        list-style: none;
    }

    :root {
        --primaryColor: #c02c2c;

        --black: #515151;
        --grey: #797979;
        --grey-2: #D4D4D4;
    }

`