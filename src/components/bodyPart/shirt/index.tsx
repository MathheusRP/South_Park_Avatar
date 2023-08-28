import { HatViewStyled } from "./style";

interface IMouth {
    svg: any | null
    color1: string | null
    color2?: string | null
    color3?: string | null
    color4?: string | null
    color5?: string | null
    color6?: string | null
    color7?: string | null
    color8?: string | null
}

export const ShirtView = ({ svg, color1, color2, color3, color4, color5, color6, color7, color8, }: IMouth) => {

    return (
        <HatViewStyled color1={color1} color2={color2} color3={color3} color4={color4} color5={color5} color6={color6} color7={color7} color8={color8}>
            {svg}
        </HatViewStyled>
    )
}