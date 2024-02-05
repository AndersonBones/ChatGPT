import Image from "next/image";
import { MyChatsContainer, NewChatButton, NewChatContainer, NewChatTitle, NewChatLogoContainer } from "./styles";
import whiteLogo from '../../assets/ChatGPT.svg'
import { NotePencil } from "phosphor-react"

export default function Mychats(){
    return (
    
        <MyChatsContainer>
            <NewChatContainer>
                
                <NewChatTitle>
                    <NewChatLogoContainer>
                        <Image src={whiteLogo} width={30} height={30} alt="White Chat-GPT logo"></Image> 
                    </NewChatLogoContainer>
                    <span>
                        New chat
                    </span>

                </NewChatTitle>

                <NewChatButton><NotePencil size={20}/></NewChatButton>
                
            </NewChatContainer>
        </MyChatsContainer>
        
    )
}