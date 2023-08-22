import styled, { css } from "styled-components";
import { IBodyColor } from "../../interfaces";

import { IModelView } from "../../interfaces";

export const ModelViewStyled = styled.section<IModelView>`
    height: 100%;
    width: 100%;
    /* background-color: aqua; */

    .body {
        
        ${({ body }) => {
        return css`
                .cls-1 {
                    fill: ${body.color1};
                }
                .cls-2 {
                    fill: ${body.color2};
                }
                .cls-3 {
                    fill: ${body.color3};
                }

            `
    }}
    }

`