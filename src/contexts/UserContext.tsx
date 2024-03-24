import { ReactNode, createContext } from "react"

interface UserProviderProps{

}

interface UserContextProps {
    children: ReactNode
}

export const UserContext = createContext({} as UserProviderProps)

export const UserContextProvider = ({ children }: UserContextProps)=>{
    return (
        <UserContext.Provider
            value={{
                
            }}
        >

        </UserContext.Provider>
    )
}