import styled, { css } from "styled-components";

interface IHair {
    color?: string | null
    color2?: string | null
}

export const IconStyled = styled.li<IHair>`
    z-index: 10;


    ${({ color, color2 }) => {
        return css`
            .cls-1{
                fill: ${color};
            }

            .cls-2{
                fill: ${color2};
            }

            .light{
                fill: ${color};
                filter: brightness(3);
                opacity: 25%;
            }

            .shadow{
                fill: ${color};
                filter: brightness(0.5);
                opacity: 50%;
            }

        `
    }}

`