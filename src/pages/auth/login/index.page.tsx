
import { globalStyles } from "@/styles/global";
import { AuthContainer, AuthForm, AuthHeader, Container, DividerWrapper, GoogleLogin, OpenAiEmail, OpenAiLogin, OpenAiPassword} from "./styles";
import GPTLogo from "@/components/Logo/GPTLogo";
import GoogleLogo from '../../../assets/google.png'
import Image from "next/image";
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";

const loginFormSchema = z.object({
    email:z.string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
    .refine((e) => e === "abcd@fg.com", "This email is not in our database"),
    name: z.string().min(3).max(40),
    password: z.string().min(3),
    confirm_password: z.string().min(3)
})
    
globalStyles()

type LoginForm = z.infer<typeof loginFormSchema>

export default function Login() {

    const {register, handleSubmit, formState:{errors}} = useForm<LoginForm>()
    const router = useRouter()

   
    const handleLogin = (data:LoginForm)=>{
        if(data){
            router.push('/chat')
        }
    }   
    return (
        <Container>
            <AuthHeader>
                <GPTLogo size={4} background="$green"/>
            </AuthHeader>

            <AuthContainer>
                <h1>Bem-vindo de volta</h1>

                <AuthForm onSubmit={handleSubmit(handleLogin)}>
                    <OpenAiEmail {...register('email')} type="text" placeholder="Endereço de email" />
                    <OpenAiPassword {...register('password')} type="password" placeholder="Senha" />
                
                    <OpenAiLogin type="submit">Continuar</OpenAiLogin>
                </AuthForm>
                

                <span>Não tem uma conta? <a href="/auth/signin">Inscrever-se</a></span>

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





