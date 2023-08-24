import { IconStyled } from "./style";

interface IIcon {
    svg: any
    color1?: string | null
    color2?: string | null
    color3?: string | null
    color4?: string | null
}

export const Icon = ({ svg, color1, color2, color3, color4 }: IIcon) => {

    return (
        <IconStyled color1={color1} color2={color2} color3={color3} color4={color4} >
            {svg}
        </IconStyled>
    )
}