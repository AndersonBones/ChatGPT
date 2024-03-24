import Image from "next/image";
import whiteLogo from '../../assets/ChatGPT.png'
import { NewChatLogoContainer } from "./styles";
import { ComponentPropsWithoutRef } from "react";

export interface LogoProps extends ComponentPropsWithoutRef<"svg">{
    size:number,
    background:string,
}
export default function GPTLogo({size, background}:LogoProps) {
    return (
        <NewChatLogoContainer css={{
                width:`${size}rem`,
                height:`${size}rem`,
                backgroundColor:background,
            }}>
            <Image src={whiteLogo} alt="White Chat-GPT logo"></Image>
        </NewChatLogoContainer>
    )
}