import styled, { css } from "styled-components";

interface IHat {
    color1?: string | null
    color2?: string | null
    color3?: string | null
    color4?: string | null
}

export const HatViewStyled = styled.li<IHat>`
    z-index: 10;

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