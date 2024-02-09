import { ReactNode } from "react";
import Mychats from "../MyChats/Mychats";
import { Container } from "./styles";

interface Props {
    children: ReactNode
}

export default function RootLayout({ children }: Props) {

    return (
        <Container>
            <Mychats></Mychats>
            {children}
        </Container>
    )

}