import { IconStyled } from "./style";

interface IHair {
    svg: any
    color?: string | null
    color2?: string | null
}

export const HairView = ({ svg, color, color2 }: IHair) => {

    return (
        <IconStyled color={color} color2={color2} >
            {svg}
        </IconStyled>
    )
}