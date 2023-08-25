import { IconStyled } from "./style";

interface IHair {
    svg: any
    color?: string | null
}

export const HairView = ({ svg, color }: IHair) => {

    return (
        <IconStyled color={color}  >
            {svg}
        </IconStyled>
    )
}