
import { ReactNode, createContext, useEffect, useState } from "react";

interface ChatContextProps {
    children: ReactNode
}

interface ChatsProps{
    chatId:string
    input:string
}

interface ChatProviderProps {
    handleToggleShowChats: () => void,
    showNavBarStatus: boolean
    toggleChats:boolean
    handleAddChat: (chat:ChatsProps)=>void
    chats:ChatsProps[]
    handleSetHome: (status:boolean)=>void
    stausHome:boolean
}

export const ChatContext = createContext({} as ChatProviderProps)

export const ChatContextProvider = ({ children }: ChatContextProps) => {

    // states 
    const [stausHome, setHome] = useState(true)
    const [chats, setChats] = useState<ChatsProps[]>([])
    const [showNavBar, setShowNavBar] = useState(false)
    const [toggleChats, setToggleChats] = useState<boolean>(true)

    const handleSetHome = (status:boolean)=>{
        setHome(status)
    }
    const handleToggleShowChats = () => {
        setToggleChats(current =>!current)
    }

    const handleAddChat = (chat: ChatsProps) =>{
        setChats([...chats, chat])
    }

   

    const mobileVersion = () => {

        if (window.innerWidth < 768) {
            setShowNavBar(true)
        } else{
            setShowNavBar(false)
        }
       
    }

    useEffect(()=>{
        console.log(chats)
    },[chats])

    useEffect(() => {
        
        mobileVersion()
        window.addEventListener('resize', mobileVersion)
    }, [])

    return (
        <ChatContext.Provider
            value={{
                handleToggleShowChats,
                showNavBarStatus: showNavBar,
                toggleChats,
                handleAddChat,
                chats,
                handleSetHome,
                stausHome
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}