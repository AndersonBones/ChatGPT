import Image from "next/image";
import { MyChatsContainer, NewChatButton, NewChatContainer, NewChatTitle, HoverCardContent } from "./styles";
import whiteLogo from '../../assets/ChatGPT.svg'
import { NotePencil } from "phosphor-react"
import * as HoverCard from '@radix-ui/react-hover-card';
import GPTLogo from "../Logo/GPTLogo";


export default function Mychats() {
    return (

        <MyChatsContainer>
            <NewChatContainer>

                <NewChatTitle>
                    <GPTLogo size={30}></GPTLogo>
                    <span>
                        New chat
                    </span>

                </NewChatTitle>

                

                <HoverCard.Root >
                    <HoverCard.Trigger asChild>
                        <NewChatButton><NotePencil size={20} /></NewChatButton>
                    </HoverCard.Trigger>
                    <HoverCard.Portal >
                        
                        <HoverCardContent className="HoverCardContent" side="right" >
                            <span>Novo chat</span>
                           
                            <HoverCard.Arrow className="HoverCardArrow"/>
                        </HoverCardContent>
                    </HoverCard.Portal>
                </HoverCard.Root>


            </NewChatContainer>
        </MyChatsContainer>

    )
}