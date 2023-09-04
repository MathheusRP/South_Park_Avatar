import { IconStyled } from "./style";
import { IHair } from "../../../interfaces";

export const HairView = ({ svg, color, color2 }: IHair) => {
    return (
        <IconStyled color={color} color2={color2} >
            {svg}
        </IconStyled>
    )
}