import styled, { css } from "styled-components";

interface IShirt {
    color1?: string | null
    color2?: string | null
    color3?: string | null
    color4?: string | null
    color5?: string | null
    color6?: string | null
    color7?: string | null
    color8?: string | null
}

export const HatViewStyled = styled.li<IShirt>`
    z-index: 10;

    ${({ color1, color2, color3, color4, color5, color6, color7, color8 }) => {
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

            .cls-5{
                fill: ${color5};
  
            }

            .cls-6{
                fill: ${color6};
  
            }

            .cls-7{
                fill: ${color7};
  
            }

            .cls-8{
                fill: ${color8};
  
            }

        `
    }}

`