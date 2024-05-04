import { useContext, useRef, useState } from "react";
import { Disclaim, GPTPrompt, GPTPromptContainer, GPTPromptForm, SendMessage } from "./styles";
import { ArrowUp } from "phosphor-react";
import { ChatContext } from "@/contexts/ChatContext";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/router";
import HoverContainer from "../HoverCard/HoverContainer";
import { openai } from "@/utils/openai";



const chatSchema = z.object({
    content: z.string(),
    author:z.string(),
    chatId: z.string(),
    IdMessage:z.string().optional()
})

export type ChatSchemaData = z.infer<typeof chatSchema>

export default function PromptContainer() {
    const { stausHome, handlePrompSize, promptSize } = useContext(ChatContext)
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const promptContainer = useRef<HTMLFormElement>(null)
    const sendMessage = useRef<HTMLButtonElement>(null)

    const [inputValue, setInputValue] = useState("")
    const {
        handleAddChat,
        handleGptResponse,
        GptResponse,
        chats,
        handleSetHome
    } = useContext(ChatContext)

    const { register, formState: { isSubmitting, errors }, handleSubmit, setValue } = useForm<ChatSchemaData>({
        resolver: zodResolver(chatSchema)
    })


    const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

        setInputValue(event.target.value)

        if (textAreaRef.current && promptContainer.current) {
            textAreaRef.current.style.height = "0rem"
            const textHeight = textAreaRef.current.scrollHeight

            if (textHeight >= 36) {
                handlePrompSize(textHeight - 36)
            }

            textAreaRef.current.style.height = `${textHeight}px`



            if (promptContainer.current) {
                if (textHeight > 320) {

                    textAreaRef.current.style.overflowY = 'auto'

                } else {
                    textAreaRef.current.style.overflowY = 'hidden'
                }
            }

        }

    }

    const router = useRouter()

    const handleSendMessage = async (data: ChatSchemaData) => {
        const { content, author, chatId } = data
        
    
        if (stausHome) { 
            await router.push(`/chat/${chatId}`)

            handleAddChat({content, author, chatId, IdMessage:uuidv4()})
        }

        setInputValue("")

        if (router.query.chatId) {
            handleAddChat({
                chatId: String(router.query.chatId),
                content,
                author,
                IdMessage: uuidv4()
            })

            handleSetHome(false)
        }
    }

    const { ref, ...rest } = register('content');
    return (

        <GPTPromptContainer>
            <GPTPromptForm ref={promptContainer} onSubmit={handleSubmit(handleSendMessage)}>


                <GPTPrompt
                    {...register('chatId', { value: uuidv4() })}
                    {...register('author', {value:'user'})}
                    

                    {...rest}
                    name="content"

                    ref={(e) => {
                        ref(e)
                        textAreaRef.current = e
                    }}
                    onChange={handleTextArea}
                    value={inputValue}
                    rows={1}
                    placeholder='Mensagem ChatGPT...'
                />

                <HoverContainer
                    side="top"
                    content={<span>Enviar mensagem</span>}

                    triggerChild={
                        <SendMessage
                            type="submit"
                            css={inputValue == "" ?
                                { backgroundColor: '$gpt_grayHover', cursor: 'not-allowed' } :
                                { backgroundColor: '$green', cursor: 'pointer' }}

                            ref={sendMessage}>
                            <ArrowUp size={20} />
                        </SendMessage>
                    }
                />

            </GPTPromptForm>

            <Disclaim>
                ChatGPT pode cometer erros. Considere verificar informações importantes.
            </Disclaim>
        </GPTPromptContainer>



    )
}