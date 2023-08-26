import { HatViewStyled } from "./style";

interface IHat {
    svg: any | null
}

export const EyesView = ({ svg }: IHat) => {

    return (
        <HatViewStyled>
            {svg}
        </HatViewStyled>
    )
}