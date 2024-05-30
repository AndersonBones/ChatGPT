
import { MyChatsContainer, NewChatTitle, MyChats, ChatsList, NewChatContainerButton, ChatItemContainer, ChatTitle, EditChat, DeleteChat, ChatActions, FooterChatList, UserProfile, Logout } from "./styles";
import GPTLogo from "../Logo/GPTLogo";
import { ChatContext } from "@/contexts/ChatContext";
import { useContext, useEffect } from "react";
import HoverContainer from "../HoverCard/HoverContainer";
import { useRouter } from "next/router";
import { NotePencil, PencilSimple, SignOut, Trash, Sparkle } from "phosphor-react";
import logo from '../../assets/user.png'
import Image from "next/image";
import { useNavigate } from 'react-router-dom';


interface MychatsProps {
    widthInRem: number
}
export default function Mychats({ widthInRem }: MychatsProps) {
    const { toggleChats, showNavBarStatus, handleSetHome, chats, handleRemoveChat } = useContext(ChatContext)

    const router = useRouter()

    const handleNewChat = async () => {
        await router.push('/chat')
        
        handleSetHome(true)
    }

   

    return (


        <MyChatsContainer className={!showNavBarStatus && toggleChats ? "showChats" : ""} >
            <MyChats css={{ width: `${widthInRem}rem`}}>

                <NewChatContainerButton onClick={handleNewChat}>

                    <NewChatTitle>
                        <GPTLogo size={2} background="$green"></GPTLogo>
                        <span>
                            Nova conversa
                        </span>

                    </NewChatTitle>

                    <HoverContainer
                        side="right"
                        content={<span>Novo chat </span>}
                        triggerChild={<NotePencil size={20} />}
                    >
                    </HoverContainer>

                </NewChatContainerButton>


                <ChatsList>
                    {chats.map((chat) => {
                        return (

                            <ChatItemContainer 
                                onClick={async () => { 
                                    await router.push(`/chat/${chat.chatId}`)
                                    handleSetHome(false)
                                }}

                                key={chat.chatId}
                                >
                                <ChatTitle >

                                    {!chat.messages[0].content && (
                                        chat.messages[0].content.substring(0, 30)+'...'
                                    )}

                                    {chat.messages[0].content && (
                                        chat.messages[0].content.substring(0, 30)+'...'
                                    )}

                                </ChatTitle>

                                <ChatActions>
                                    <EditChat>
                                        <PencilSimple />
                                    </EditChat>

                                    <DeleteChat onClick={()=> handleRemoveChat(chat.chatId as string)}>
                                        <Trash />
                                    </DeleteChat>
                                </ChatActions>


                            </ChatItemContainer>

                        )
                    })}

                </ChatsList>

                <FooterChatList>

                    <UserProfile>
                        
                        <Sparkle color="white" size={25}></Sparkle>
                        
                        <span>Upgrade plan</span>
                    </UserProfile>

                    <HoverContainer content="Log out" triggerChild={
                        <Logout>
                            <SignOut size={20}/>
                        </Logout>
                    }
                    side="right"
                    >

                    </HoverContainer>
                    
                </FooterChatList>
            </MyChats>

        </MyChatsContainer>

    )
}