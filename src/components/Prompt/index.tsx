import { useRef, useState } from "react";
import { GPTPrompt, GPTPromptContainer, SendMessage } from "./styles";
import { ArrowUp } from "phosphor-react";
import * as ScrollArea from '@radix-ui/react-scroll-area';


export default function PromptContainer() {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const promptContainer = useRef<HTMLDivElement>(null)
    const sendMessage = useRef<HTMLButtonElement>(null)

    const [value, setValue] = useState("")

    const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

        setValue(event.target.value)

        if (textAreaRef.current) {
            textAreaRef.current.style.height = "0px"
            const textHeight = textAreaRef.current.scrollHeight

            textAreaRef.current.style.height = `${textHeight}px`

            if(promptContainer.current){
                if(textHeight > 320){
                   
                    promptContainer.current.style.overflowY = 'auto'
                    
                }else{
                    promptContainer.current.style.overflowY = 'hidden'
                }
            }
            
        }

    }


    return (

        
        <GPTPromptContainer ref={promptContainer}>
            
            <GPTPrompt ref={textAreaRef} value={value} onChange={handleTextArea} rows={1} placeholder='Mensagem ChatGPT...' />

            <SendMessage  css={value == "" ? {backgroundColor:'$gpt_grayHover'}: {backgroundColor:'$white'}} ref={sendMessage}>
                <ArrowUp size={20}/>
            </SendMessage>
        </GPTPromptContainer>


    )
}