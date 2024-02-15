import { ReactNode } from "react";
import Mychats from "../MyChats";
import { Container } from "./styles";


interface Props {
    children: ReactNode
}

export default function RootLayout({ children }: Props) {

    return (
        <Container>
            
            <Mychats widthInRem={18}></Mychats>
            {children}
        </Container>
    )

}