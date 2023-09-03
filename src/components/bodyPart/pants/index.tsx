import { HatViewStyled } from "./style";

interface IPants {
    svg: JSX.Element | null
    color1: string | null
    color2?: string | null
    color3?: string | null
    color4?: string | null
}

export const PantsView = ({ svg, color1, color2, color3, color4 }: IPants) => {

    return (
        <HatViewStyled color1={color1} color2={color2} color3={color3} color4={color4}>
            {svg}
        </HatViewStyled>
    )
}