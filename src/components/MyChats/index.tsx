
import { MyChatsContainer, NewChatTitle, MyChats, ChatsList, NewChatContainerButton } from "./styles";
import GPTLogo from "../Logo/GPTLogo";
import { ChatContext } from "@/contexts/ChatContext";
import { useContext, useEffect } from "react";
import HoverContainer from "../HoverCard/HoverContainer";
import { useRouter } from "next/router";
import { NotePencil } from "phosphor-react";


interface MychatsProps{
    widthInRem:number
}
export default function Mychats({widthInRem}:MychatsProps) {
    const { toggleChats, showNavBarStatus } = useContext(ChatContext)

    const router = useRouter()

    const handleNewChat = async () => {
        await router.push('/chats')

    }


    return (

        
        <MyChatsContainer  className={!showNavBarStatus && toggleChats ? "showChats" : ""} >
            <MyChats css={{width:`${widthInRem}rem`}}>

                <NewChatContainerButton onClick={handleNewChat}>

                    <NewChatTitle>
                        <GPTLogo size={30}></GPTLogo>
                        <span>
                            New chat
                        </span>

                    </NewChatTitle>

                    <HoverContainer
                        content={<span>Novo chat </span>}
                        triggerChild={<NotePencil size={20} />}
                    >
                    </HoverContainer>

                </NewChatContainerButton>


                <ChatsList>

                </ChatsList>
            </MyChats>

        </MyChatsContainer>

    )
}