import {ChatGPTContainer, ChatGPTHeader, ChatVersion} from './styles'
import { CaretDown } from 'phosphor-react'
export default function ChatContainer(){
    return (
        <ChatGPTContainer>
            <ChatGPTHeader>
                <ChatVersion>ChatGPT 3.5 <CaretDown size={20}/></ChatVersion>
            </ChatGPTHeader>
        </ChatGPTContainer>
    )
}