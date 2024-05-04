

import { globalStyles } from "@/styles/global";
import { AuthContainer, AuthForm, AuthHeader, Container, DividerWrapper, GoogleLogin, OpenAiEmail, OpenAiLogin, OpenAiPassword } from "../login/styles";
import GPTLogo from "@/components/Logo/GPTLogo";
import GoogleLogo from '../../../assets/google.png'
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import { OpenAiBirthDay, OpenAiName, OpenAiPasswordConfirmation } from "./styles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { api } from "@/utils/axios";
import { useRouter } from "next/router";


globalStyles()

const signinFormSchema = z.object({
    email: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email.")
        .refine((e) => e === "abcd@fg.com", "This email is not in our database"),
    name: z.string().min(3).max(40),
    password: z.string().min(3),
    confirm_password: z.string().min(3),
    birthday: z.coerce.date(),
}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm"]
})

export type SigninForm = z.infer<typeof signinFormSchema>


export default function Signin() {

    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>()
    const router = useRouter()

    const handleSignin = async (data: SigninForm) => {
        try {
            const newUser = await api.post('/user/register', {
                id:uuidv4(),
                name: data.name,
                email: data.email,
                birthday: data.birthday,
                password: data.password
            })

           
            await router.replace("/chat")

        } catch (error: any) {
            if (error.response.data) {
                alert(error.response.data.message)
            }
        }

    }

    return (
        <Container>
            <AuthHeader>
                <GPTLogo size={4} background="$green" />
            </AuthHeader>

            <AuthContainer>
                <h1>Bem-vindo</h1>

                <AuthForm onSubmit={handleSubmit(handleSignin)}>
                    <OpenAiEmail {...register('email')} type="text" placeholder="Endereço de email" />
                    <OpenAiName {...register('name')} type="text" placeholder="Nome completo" />
                    <OpenAiBirthDay {...register('birthday')} type="date" placeholder="Nascimento" />
                    <OpenAiPassword {...register('password')} type="password" placeholder="Nova Senha" />
                    <OpenAiPasswordConfirmation {...register('confirm_password')} type="password" placeholder="Confirmação de Senha" />
                    <OpenAiLogin type="submit">Continuar</OpenAiLogin>
                </AuthForm>


                <span>Já tem uma conta? <a href="/auth/login">Conecte-se</a></span>

                <DividerWrapper>
                    <span>OU</span>
                </DividerWrapper>
                <GoogleLogin type="submit">
                    <Image src={GoogleLogo} width={22} alt="google logo" />
                    Continuar com o Google
                </GoogleLogin>
            </AuthContainer>

        </Container>
    )



}





