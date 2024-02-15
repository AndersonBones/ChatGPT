
import {
    ChatContent,
    ChatGPT,
    ChatGPTContainer,
    ChatGPTHeader, ChatGPTInfo,
    ChatVersion,
    HideMyChats,
} from './styles'
import { FaAngleLeft, FaAngleDown, FaAngleRight } from "react-icons/fa";

import GPTLogo from '../Logo/GPTLogo';
import { useContext, useEffect } from 'react';
import { ChatContext } from '@/contexts/ChatContext';

import HoverContainer from '../HoverCard/HoverContainer';
import NewChatSecondaryBtn from '../NewChatSecondaryButton';
import PromptContainer from '../Prompt';
import MyChatsMobile from '../Mobile/MyChats';



export default function ChatContainer() {

    const { handleToggleShowChats, toggleChats, showNavBarStatus } = useContext(ChatContext)


    return (
        <ChatGPTContainer >

            {showNavBarStatus ? (
                <ChatGPTHeader className="navbar" css={{justifyContent:"space-between"}}>
                    {showNavBarStatus? (<MyChatsMobile/>) : ""}
                    <ChatVersion>ChatGPT 3.5  <FaAngleDown size={20} /></ChatVersion>
                    {showNavBarStatus ? (<NewChatSecondaryBtn border={false} />) : ""}
                </ChatGPTHeader>
            ) : (
                <ChatGPTHeader >
                    {!showNavBarStatus && !toggleChats ? (<NewChatSecondaryBtn border={true} />) : ""}
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

            
            {!showNavBarStatus && (
                <HoverContainer
                content={toggleChats ? (<span>Fechar barra lateral</span>) : (<span>Abrir barra lateral</span>)}
                triggerChild={
                    <HideMyChats onClick={() => { handleToggleShowChats() }}>
                        {toggleChats ? (<FaAngleLeft size={25} />) : (<FaAngleRight size={25} />)}

                    </HideMyChats>
                }
            />
            )}
            



        </ChatGPTContainer>
    )
}