import styled, { css } from "styled-components";
import { IBodyColor } from "../../interfaces";

import { IModelView } from "../../interfaces";

export const ModelViewStyled = styled.section<IModelView>`
    height: 100%;
    width: 100%;
    position: relative;
    /* background-color: aqua; */

    .body {
        /* background-color: aqua; */
        .hands {
            position: absolute;
            width: 100%;
            top: 0px;
            z-index: 20;
        }
        
        ${({ body }) => {
        return css`
                .cls-1 {
                    fill: ${body.skin};
                    filter: brightness(0.75);
                }
                .cls-2 {
                    fill: ${body.skin};
                    
                }
                .cls-3 {
                    fill: ${body.underwear};
                }
                .cls-4 {
                    fill: red;
                }
                .cls-5 {
                    fill: blue;
                    opacity: 0%;

                }

            `
    }}
    }

    .hair {
        position: absolute;
        /* background-color: aqua; */
        /* height: 100%; */
        width: 100%;
        z-index: 5;
        top: -60px;
        left: -10px;
    }

    .hat {
        position: absolute;
        width: 100%;
        z-index: 5;
        top: -70px;
        left: -10px;
    }

    .eyes {
        position: absolute;
        width: 100%;
        top: 10px;
        right: 10px;
        /* left0px */
    }

    .mouth {
        position: absolute;
        top: -40px;
        width: 100%
    }

    .shirt {
        position: absolute;
        top: 85px;
        width: 100%;
    }

`