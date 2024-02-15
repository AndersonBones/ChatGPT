
import { ReactNode, createContext, useEffect, useState } from "react";

interface ChatContextProps {
    children: ReactNode
}
interface ChatProps {
    handleToggleShowChats: () => void,
    showNavBarStatus: boolean
    toggleChats:boolean
}
export const ChatContext = createContext({} as ChatProps)

export const ChatContextProvider = ({ children }: ChatContextProps) => {

    // states 
    const [showNavBar, setShowNavBar] = useState(false)
    const [toggleChats, setToggleChats] = useState<boolean>(true)

    const handleToggleShowChats = () => {
        setToggleChats(current =>!current)
    }

    

    const mobileVersion = () => {

        if (window.innerWidth < 768) {
            setShowNavBar(true)
        } else{
            setShowNavBar(false)
        }
       
    }

 
    useEffect(() => {
        mobileVersion()
        window.addEventListener('resize', mobileVersion)
    }, [])

    return (
        <ChatContext.Provider
            value={{
                handleToggleShowChats,
                showNavBarStatus: showNavBar,
                toggleChats
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}