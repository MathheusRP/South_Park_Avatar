import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react"
import { IBodyColor } from "../interfaces"
// import { bodyList } from "../data/bodyIcon"

interface IUserProviderProps {
    children: ReactNode
}

interface IUserContext {
    body: IBodyColor
    setBody: Dispatch<SetStateAction<IBodyColor>>
    menu: any
    setMenu: any
    hair: any
    setHair: any
    hairColor: any
    setHairColor: any
    hat: any
    setHat: any
    typeHair: number
    setTypeHair: any
    eyes: any
    setEyes: any
    mouth: any
    setMouth: any
    shirt: any
    setShirt: any
    pants: any
    setPants: any
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [menu, setMenu] = useState<string>("body")

    const [body, setBody] = useState<IBodyColor>({ id: 1, skin: "#c3a68a", underwear: "#ededed" })

    const [hair, setHair] = useState<any | null>(null)
    const [hairColor, setHairColor] = useState<string | null>(null)
    const [typeHair, setTypeHair] = useState<number | 1>(1)

    const [hat, setHat] = useState<any | null>(null)

    const [eyes, setEyes] = useState<any | null>(null)

    const [mouth, setMouth] = useState<any | null>(null)

    const [shirt, setShirt] = useState<any | null>(null)

    const [pants, setPants] = useState<any | null>(null)

    return (
        <UserContext.Provider value={{
            body, setBody, menu, setMenu, hair, setHair, setHairColor,
            hairColor, hat, setHat, typeHair, setTypeHair, eyes, setEyes,
            mouth, setMouth, shirt, setShirt, pants, setPants
        }}>
            {children}
        </UserContext.Provider>
    )
}