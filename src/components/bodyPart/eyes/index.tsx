import { HatViewStyled } from "./style";

interface IHat {
    svg: JSX.Element | null
}

export const EyesView = ({ svg }: IHat) => {

    return (
        <HatViewStyled>
            {svg}
        </HatViewStyled>
    )
}