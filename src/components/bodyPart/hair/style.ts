import styled, { css } from "styled-components";

interface IHair {
    color?: string | null
}

export const IconStyled = styled.li<IHair>`
    z-index: 10;

    ${({ color }) => {
        return css`
            .cls-1{
                fill: ${color};
            }

            .cls-2{
                fill: ${color};
                filter: brightness(3);
                opacity: 25%;
            }

            .cls-3{
                fill: ${color};
                filter: brightness(0.5);
                opacity: 50%;
            }

        `
    }}

`