import { HatViewStyled } from "./style";
import { IHat } from "../../../interfaces";

export const HatView = ({ svg, color1, color2, color3, color4 }: IHat) => {

    return (
        <HatViewStyled color1={color1} color2={color2} color3={color3} color4={color4}>
            {svg}
        </HatViewStyled>
    )
}