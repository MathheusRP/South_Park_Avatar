import { HatViewStyled } from "./style";

interface IMouth {
    svg: JSX.Element | null
}

export const MouthView = ({ svg }: IMouth) => {

    return (
        <HatViewStyled>
            {svg}
        </HatViewStyled>
    )
}