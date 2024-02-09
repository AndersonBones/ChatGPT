
import {
    ChatContent,
    ChatGPT,
    ChatGPTContainer,
    ChatGPTHeader, ChatGPTInfo,
    ChatVersion, GPTPrompt, GPTPromptContainer,
    SendMesage
} from './styles'

import { ArrowUp, CaretDown } from 'phosphor-react'
import GPTLogo from '../Logo/GPTLogo';


export default function ChatContainer() {
    return (
        <ChatGPTContainer>
            <ChatGPTHeader>
                <ChatVersion>ChatGPT 3.5 <CaretDown size={20} /></ChatVersion>
            </ChatGPTHeader>

            <ChatContent>
                
                <ChatGPT>
                    <ChatGPTInfo>
                        <GPTLogo size={50}></GPTLogo>
                        <span>Como posso ajudá-lo hoje?</span>
                    </ChatGPTInfo>
                    
                </ChatGPT>

                <GPTPromptContainer>
                    <GPTPrompt placeholder='Mensagem ChatGPT...' >

                    </GPTPrompt>

                    <SendMesage>
                        <ArrowUp size={20}></ArrowUp>
                    </SendMesage>
                </GPTPromptContainer>
            </ChatContent>





        </ChatGPTContainer>
    )
}