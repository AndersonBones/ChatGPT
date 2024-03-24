
import { globalStyles } from "@/styles/global";
import { AuthContainer, AuthForm, AuthHeader, Container, DividerWrapper, GoogleLogin, OpenAiEmail, OpenAiLogin, OpenAiPassword} from "./styles";
import GPTLogo from "@/components/Logo/GPTLogo";
import GoogleLogo from '../../assets/google.png'
import Image from "next/image";


import { Message} from 'primereact/message';
    
globalStyles()


export default function Login() {
    
    return (
        <Container>
            <AuthHeader>
                <GPTLogo size={4} background="$green"/>
            </AuthHeader>

            <AuthContainer>
                <h1>Bem-vindo de volta</h1>

                <AuthForm>
                    <OpenAiEmail type="text" placeholder="Endereço de email" />
                    <OpenAiPassword type="password" placeholder="Senha" />
                
                    <OpenAiLogin type="submit">Continuar</OpenAiLogin>
                </AuthForm>
                

                <span>Não tem uma conta? <a href="">Inscrever-se</a></span>

                <DividerWrapper>
                    <span>OU</span>
                </DividerWrapper>
                <GoogleLogin type="submit">
                    <Image src={GoogleLogo} width={22}  alt="google logo" /> 
                    Continuar com o Google
                </GoogleLogin>
            </AuthContainer>
            
        </Container>
    )
    

}





