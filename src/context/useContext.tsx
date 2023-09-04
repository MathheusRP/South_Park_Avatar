import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react"
import { IBodyColor } from "../interfaces"
import { IHair } from "../interfaces"
import { IHat } from "../interfaces"

interface IUserProviderProps {
    children: ReactNode
}

interface IUserContext {
    body: IBodyColor
    setBody: Dispatch<SetStateAction<IBodyColor>>
    menu: string
    setMenu: Dispatch<SetStateAction<string>>
    hair: IHair | null
    setHair: Dispatch<SetStateAction<IHair | null>>
    hairColor: string | null
    setHairColor: Dispatch<SetStateAction<string | null>>
    hat: IHat | null
    setHat: Dispatch<SetStateAction<IHat | null>>
    typeHair: number | undefined
    setTypeHair: Dispatch<SetStateAction<number | undefined>>
    eyes: JSX.Element | null
    setEyes: any
    mouth: any
    setMouth: any
    shirt: any
    setShirt: any
    pants: any
    setPants: any
    shirtColor: string
    setShirtColor: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [menu, setMenu] = useState<string>("body")

    const [body, setBody] = useState<IBodyColor>({ id: 1, skin: "#c3a68a", underwear: "#ededed" })

    const [hair, setHair] = useState<IHair | null>(null)
    const [hairColor, setHairColor] = useState<string | null>(null)
    const [typeHair, setTypeHair] = useState<number | undefined>(1)

    const [hat, setHat] = useState<IHat | null>(null)

    const [eyes, setEyes] = useState<JSX.Element | null | null>(null)

    const [mouth, setMouth] = useState<any | null>(null)

    const [shirt, setShirt] = useState<any | null>(null)
    const [shirtColor, setShirtColor] = useState<string>("")

    const [pants, setPants] = useState<any | null>(null)

    return (
        <UserContext.Provider value={{
            body, setBody, menu, setMenu, hair, setHair, setHairColor,
            hairColor, hat, setHat, typeHair, setTypeHair, eyes, setEyes,
            mouth, setMouth, shirt, setShirt, pants, setPants, shirtColor, setShirtColor
        }}>
            {children}
        </UserContext.Provider>
    )
}