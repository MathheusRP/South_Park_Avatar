import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react"
import { IBodyColor } from "../interfaces"


interface IUserProviderProps {
    children: ReactNode
}

interface IUserContext {
    body: IBodyColor
    setBody: Dispatch<SetStateAction<IBodyColor>>
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [body, setBody] = useState<IBodyColor>({ id: 1, color1: "#c3a68a", color2: "#F1DCCB", color3: "#ededed" })

    return (
        <UserContext.Provider value={{ body, setBody }}>
            {children}
        </UserContext.Provider>
    )
}