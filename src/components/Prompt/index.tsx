import { useContext, useRef, useState } from "react";
import { GPTPrompt, GPTPromptContainer, SendMessage } from "./styles";
import { ArrowUp } from "phosphor-react";
import { ChatContext } from "@/contexts/ChatContext";
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/router";



const chatSchema = z.object({
    input:z.string(),
    chatId:z.string()
})

type ChatSchemaData = z.infer<typeof chatSchema>

export default function PromptContainer() {
    const {stausHome} = useContext(ChatContext)
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const promptContainer = useRef<HTMLFormElement>(null)
    const sendMessage = useRef<HTMLButtonElement>(null)

    const [textAreaValue, setTextAreaValue] = useState("")
    const {handleAddChat} = useContext(ChatContext)

    const {register, formState:{isSubmitting, errors}, handleSubmit,setValue } = useForm<ChatSchemaData>({
        resolver:zodResolver(chatSchema)
    })

    const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

        setTextAreaValue(event.target.value)

        if (textAreaRef.current) {
            textAreaRef.current.style.height = "0px"
            const textHeight = textAreaRef.current.scrollHeight

            textAreaRef.current.style.height = `${textHeight}px`

            if(promptContainer.current){
                if(textHeight > 320){
                   
                    textAreaRef.current.style.overflowY = 'auto'
                    
                }else{
                    textAreaRef.current.style.overflowY = 'hidden'
                }
            }
            
        }

    }

    const router = useRouter()
    const handlePrompt = async (data:ChatSchemaData)=>{
        if(stausHome){
            handleAddChat(data)
            await router.push(`/chat/${data.chatId}`)
        }

        
        
        setTextAreaValue("")
        
    }

    const { ref, ...rest } = register('input');
    return (

        
        <GPTPromptContainer  ref={promptContainer} onSubmit={handleSubmit(handlePrompt)}>
            
           
            <GPTPrompt 
                {...register('chatId', {value:uuidv4()})}
                {...rest} 
                name="input"
            
                ref={(e)=>{
                    ref(e)
                    textAreaRef.current = e
                }}
                onChange={handleTextArea}
                value={textAreaValue}
                rows={1} 
                placeholder='Mensagem ChatGPT...' 
            />

            <SendMessage type="submit" css={textAreaValue == "" ? {backgroundColor:'$gpt_grayHover'}: {backgroundColor:'$white'}} ref={sendMessage}>
                <ArrowUp size={20}/>
            </SendMessage>
        </GPTPromptContainer>


    )
}