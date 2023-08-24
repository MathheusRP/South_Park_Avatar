import { IconStyled } from "./style";

interface IBodyView {
    svg: any
    skin?: string | null
    underwear?: string | "#ededed"
}

export const BodyView = ({ svg, skin, underwear }: IBodyView) => {

    return (
        <IconStyled skin={skin} underwear={underwear} >
            {svg}
        </IconStyled>
    )
}