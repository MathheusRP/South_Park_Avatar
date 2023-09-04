import { IconStyled } from "./style";
import { IBodyView } from "../../../interfaces";

export const BodyView = ({ svg, skin, underwear }: IBodyView) => {

    return (
        <IconStyled skin={skin} underwear={underwear} >
            {svg}
        </IconStyled>
    )
}