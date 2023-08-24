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

            `
    }}
    }

    .hair {
        position: absolute;
        /* background-color: aqua; */
        /* height: 100%; */
        width: 100%;
        z-index: 5;
        top: -70px;
        left: -10px;
    }

`