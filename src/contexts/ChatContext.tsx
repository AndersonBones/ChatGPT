import { ReactNode, createContext, useEffect, useState } from "react";


interface ChatContextProps {
    children: ReactNode
}
interface ChatProps {
    handleSetShowChats: () => void,
    showChatsStatus: boolean,
    showNavBarStatus: boolean
}
export const ChatContext = createContext({} as ChatProps)

export const ChatContextProvider = ({ children }: ChatContextProps) => {

    const [showChats, setShowChats] = useState(true)

    const handleSetShowChats = () => {
        setShowChats(current => !current)
    }

    const [showNavBar, setShowNavBar] = useState(false)


    const mobileVersion = () => {

        if (window.innerWidth < 768) {
            setShowNavBar(true)
            setShowChats(false)
        } else {
            setShowNavBar(false)
            setShowChats(true)
        }
    }

    useEffect(() => {
        
        window.addEventListener('resize', mobileVersion)
    }, [showChats, showNavBar])

    return (
        <ChatContext.Provider
            value={{
                handleSetShowChats: handleSetShowChats,
                showChatsStatus: showChats,
                showNavBarStatus: showNavBar
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}