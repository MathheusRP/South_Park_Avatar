import { HatViewStyled } from "./style";

interface IMouth {
    svg: any | null
}

export const MouthView = ({ svg }: IMouth) => {

    return (
        <HatViewStyled>
            {svg}
        </HatViewStyled>
    )
}