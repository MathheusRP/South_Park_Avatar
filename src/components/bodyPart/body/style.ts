import styled, { css } from "styled-components";

interface Icolor {
    skin?: string | null
    underwear?: string | "#ededed"

}

export const IconStyled = styled.li<Icolor>`
    height: 210px;
    min-width: 175px;
    /* background-color: red; */

    ${({ skin, underwear }) => {
        return css`
            .cls-1{
                fill: ${skin};
                filter: brightness(0.75);
            }

            .cls-2{
                fill: ${skin};
     
            }

            .cls-3{
                fill: ${underwear};
            }
        `
    }}

@media (max-width: 1200px) {
    transform: scale(0.7);
    
   
}

`