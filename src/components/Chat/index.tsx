
import {
    ChatGPTContainer,
    ChatGPTHeader,
    ChatVersion,
    HideMyChats,
} from './styles'

import { FaAngleLeft, FaAngleDown, FaAngleRight } from "react-icons/fa";

import { ReactNode, useContext } from 'react';
import { ChatContext } from '@/contexts/ChatContext';

import HoverContainer from '../HoverCard/HoverContainer';
import NewChatSecondaryBtn from '../NewChatSecondaryButton';

import MyChatsMobile from '../Mobile/MyChats';
import PromptContainer from '../Prompt';



interface Props {
    children: ReactNode
}

export default function ChatContainer({children}:Props) {

    const { handleToggleShowChats, toggleChats, showNavBarStatus } = useContext(ChatContext)

    
    return (
        <ChatGPTContainer >

            {showNavBarStatus ? (
                <ChatGPTHeader className="navbar" css={{ justifyContent: "space-between" }}>
                    {showNavBarStatus ? (<MyChatsMobile />) : ""}
                    <ChatVersion>ChatGPT 3.5  <FaAngleDown size={20} /></ChatVersion>
                    {showNavBarStatus ? (<NewChatSecondaryBtn border={false} />) : ""}
                </ChatGPTHeader>
            ) : (
                <ChatGPTHeader >
                    {!showNavBarStatus && !toggleChats ? (<NewChatSecondaryBtn border={true} />) : ""}
                    <ChatVersion>ChatGPT 3.5  <FaAngleDown size={20} /></ChatVersion>
                </ChatGPTHeader>
            )}


            {!showNavBarStatus && (
                <HoverContainer
                    side='right'
                    content={toggleChats ? (<span>Fechar barra lateral</span>) : (<span>Abrir barra lateral</span>)}
                    triggerChild={
                        <HideMyChats onClick={() => { handleToggleShowChats() }}>
                            {toggleChats ? (<FaAngleLeft size={25} />) : (<FaAngleRight size={25} />)}

                        </HideMyChats>
                    }
                />
            )}

           
            {children}
            
            <PromptContainer /> 
            
        </ChatGPTContainer>
    )
}