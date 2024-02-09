import Image from "next/image";
import whiteLogo from '../../assets/ChatGPT.svg'
import { NewChatLogoContainer } from "./styles";
import { ComponentPropsWithoutRef } from "react";

export interface LogoProps extends ComponentPropsWithoutRef<"svg">{
    size:number
}
export default function GPTLogo({size}:LogoProps) {
    return (
        <NewChatLogoContainer css={{
            width:size,
            height:size,
            }}>
            <Image src={whiteLogo} alt="White Chat-GPT logo"></Image>
        </NewChatLogoContainer>
    )
}