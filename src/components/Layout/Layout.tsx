import { ReactNode } from "react";
import Mychats from "../MyChats";
import { Container } from "./styles";
import ChatContainer from "../Chat";


interface Props {
    children: ReactNode
}

export default function RootLayout({ children }: Props) {

    return (
        <Container>
            
            <Mychats widthInRem={18}></Mychats>
            <ChatContainer>
                {children}
            </ChatContainer>
            
        </Container>
    )

}