import ChatConversation from "@/components/ChatConversation/index.page";
import ChatContainer from "@/components/Chat";
import RootLayout from "@/components/Layout/Layout";
import { ChatContext } from "@/contexts/ChatContext";
import { useContext, useEffect } from "react";

export default function ChatID(){
    const {handleSetHome} = useContext(ChatContext)
    useEffect(()=>{
        handleSetHome(false)
    },[])
    
    return(
        <RootLayout>
            <ChatConversation></ChatConversation>
            
        </RootLayout>
    )
}