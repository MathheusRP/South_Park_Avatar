import styled, { css } from "styled-components";

interface Icolor {
    color1?: string
    color2?: string
    color3?: string
    color4?: string

}

export const IconStyled = styled.li<Icolor>`
    

    ${({ color1, color2, color3, color4 }) => {
        return css`
            .cls-1{
                fill: ${color1};
            }
            .cls-2{
                fill: ${color2};
            }
            .cls-3{
                fill: ${color3};
            }
            .cls-4{
                fill: ${color4};
            }
        `
    }}

`