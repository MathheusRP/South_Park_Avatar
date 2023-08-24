import styled, { css } from "styled-components";

interface IHair {
    color?: string | null
}

export const IconStyled = styled.li<IHair>`
    

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
            }

        `
    }}

`