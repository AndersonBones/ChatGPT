
import {
    ChatContent,
    ChatGPT,
    ChatGPTContainer,
    ChatGPTHeader, ChatGPTInfo,
    ChatVersion,
    HideMyChats,
} from './styles'
import { FaAngleLeft, FaAngleDown, FaAngleRight } from "react-icons/fa";
import { ArrowUp } from 'phosphor-react'
import GPTLogo from '../Logo/GPTLogo';
import { useContext, useEffect } from 'react';
import { ChatContext } from '@/contexts/ChatContext';
import * as HoverCard from '@radix-ui/react-hover-card';
import HoverContainer from '../HoverCard/HoverContainer';
import NewChatSecondaryBtn from '../NewChatSecondaryButton';
import NavBar from '../NavBarButton';
import Prompt from '../Prompt';
import PromptContainer from '../Prompt';



export default function ChatContainer() {

    const { handleSetShowChats, showChatsStatus, showNavBarStatus } = useContext(ChatContext)


    return (
        <ChatGPTContainer >

            {showNavBarStatus ? (
                <ChatGPTHeader className="navbar" css={{justifyContent:"space-between"}}>
                    {showNavBarStatus ? (<NavBar />) : ""}
                    <ChatVersion>ChatGPT 3.5  <FaAngleDown size={20} /></ChatVersion>
                    {showNavBarStatus ? (<NewChatSecondaryBtn border={false} />) : ""}
                </ChatGPTHeader>
            ) : (
                <ChatGPTHeader >
                    {!showNavBarStatus && !showChatsStatus ? (<NewChatSecondaryBtn border={true} />) : ""}
                    <ChatVersion>ChatGPT 3.5  <FaAngleDown size={20} /></ChatVersion>
                </ChatGPTHeader>
            )}


            <ChatContent className='md:container md:mx-auto'>

                <ChatGPT>
                    <ChatGPTInfo>
                        <GPTLogo size={60}></GPTLogo>
                        <span>Como posso ajudá-lo hoje?</span>
                    </ChatGPTInfo>

                </ChatGPT>

                <PromptContainer/>
            </ChatContent>


            <HoverContainer
                content={showChatsStatus ? (<span>Fechar barra lateral</span>) : (<span>Abrir barra lateral</span>)}
                triggerChild={
                    <HideMyChats onClick={() => { handleSetShowChats() }}>
                        {showChatsStatus ? (<FaAngleLeft size={25} />) : (<FaAngleRight size={25} />)}

                    </HideMyChats>
                }
            />



        </ChatGPTContainer>
    )
}