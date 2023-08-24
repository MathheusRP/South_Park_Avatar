import styled, { css } from "styled-components";

interface Icolor {
    skin?: string | null
    underwear?: string | "#ededed"

}

export const IconStyled = styled.li<Icolor>`
    

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

`