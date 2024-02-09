
import { globalStyles } from "@/styles/global";
import { Container, GetStartedButton, GetStartedButtonContainer, GetStartedContainer, GetStartedTitle, LoginContainer, LoginHeader, LoginHero, LoginTitle, MessageHeroContainer } from "./styles";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
globalStyles()


export default function Login() {
    
    return (
        <Container>
            <LoginHero>
                <LoginHeader >
                    <LoginTitle>ChatGPT<FaCircle size={18}/></LoginTitle>
                </LoginHeader>

                <MessageHeroContainer>
                    <h1>
                        Give me ideas for a customer loyalty program in a small bookstore ●
                    </h1>
                </MessageHeroContainer>
            </LoginHero>

            <LoginContainer>
                <GetStartedContainer>
                    <GetStartedTitle>
                        <h1>Get started</h1>
                    </GetStartedTitle>
                    
                    <GetStartedButtonContainer>
                        <GetStartedButton>Log in</GetStartedButton>
                        <GetStartedButton>Sign up</GetStartedButton>
                    </GetStartedButtonContainer>
                    
                    
                </GetStartedContainer>
            </LoginContainer>
            
        </Container>
    )
    

}




