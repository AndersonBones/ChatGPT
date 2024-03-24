
import { ChatSchemaData } from "@/components/Prompt";
import {  openai } from "@/lib/openai";
import { useRouter } from "next/router";

import { ChatCompletionMessage } from "openai/resources/chat/index.mjs";
import { ReactNode, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface ChatContextProps {
    children: ReactNode
}

export interface Message {
    IdMessage?: string
    content: string 
    author:string
}
export interface ChatsProps {
    chatId?: string
    messages: Message[]
}

interface ChatOutputProps {
    output: string,
    IdMessage: string
    chatId: string
}
interface ChatProviderProps {
    handleToggleShowChats: () => void,
    showNavBarStatus: boolean
    toggleChats: boolean
    handleAddChat: (chat: ChatSchemaData) => void
    chats: ChatsProps[]
    handleSetHome: (status: boolean) => void
    stausHome: boolean
    handleGptResponse: (value: string) => void
    GptResponse: string,
    handlePrompSize: (value: number) => void
    promptSize: number
    handleRemoveChat: (chatId: string) => void
    isSubmitting: boolean
}

export const ChatContext = createContext({} as ChatProviderProps)

export const ChatContextProvider = ({ children }: ChatContextProps) => {

    // states
    const [GptResponse, setGptResponse] = useState("")
    const [stausHome, setHome] = useState(true)
    const [chats, setChats] = useState<ChatsProps[]>([])
    const [showNavBar, setShowNavBar] = useState(false)
    const [toggleChats, setToggleChats] = useState<boolean>(true)
    const [promptSize, setSizePrompt] = useState(0)
    const [isSubmitting, setSubmitting] = useState(false)

    
   
    const handlePrompSize = (value: number) => {
        setSizePrompt(value)
    }

    const handleGptResponse = (value: string) => {
        setGptResponse(value)
    }

    const handleSetHome = (status: boolean) => {
        setHome(status)
    }
    const handleToggleShowChats = () => {
        setToggleChats(current => !current)

    }


    // delete chat
    const handleRemoveChat = (chatId: string) => {
        const newChats = chats.filter((chat) => {
            return chat.chatId !== chatId
        })

        setChats(newChats)
    }

    // add message
    const handleAddChat = async (chat: ChatSchemaData) => {
        
        let newChats = [...chats]
        
        const chatIndex = newChats.findIndex(item=>{
            return item.chatId == chat.chatId
        })

      

        if(newChats.length >= 1 && newChats[chatIndex] && newChats[chatIndex].messages.length >= 1){

            const messageIndex = newChats.findIndex(item=>{
                return item.chatId == chat.chatId
            })

            newChats[messageIndex].messages.push({
                author:chat.author,
                content:chat.content,
                IdMessage:chat.IdMessage
            })

            setChats(newChats)

            setSubmitting(true)
            const message = await openai.getMessage(
                openai.translateMessages(newChats[messageIndex].messages)
            )
            setSubmitting(false)
           
            const outputChats = [...newChats]

            outputChats[messageIndex].messages.push({
                author:message.role,
                content:message.content as string,
                IdMessage:chat.IdMessage
            })

            setChats(outputChats)
        
        }else{
            setChats([...chats,{
                chatId:chat.chatId,
                messages:[{
                    author:chat.author, 
                    content:chat.content,
                    IdMessage:chat.IdMessage
                }]
            }])
            
       
            const inputMessage = []

            inputMessage.push({
                author:chat.author, 
                content:chat.content,
                IdMessage:chat.IdMessage
            })

            setSubmitting(true)
            const message = await openai.getMessage(
                openai.translateMessages(inputMessage)
            )
            setSubmitting(false)
            
            inputMessage.push({
                author:message.role, 
                content:message.content as string,
                IdMessage:chat.IdMessage
            })
            
            setChats([...chats,{
                chatId:chat.chatId,
                messages:inputMessage
            }])
        }
        
    }



    

    const mobileVersion = () => {

        if (window.innerWidth < 768) {
            setShowNavBar(true)
        } else {
            setShowNavBar(false)
        }

    }

    useEffect(()=>{
        console.log(chats)
    },[chats])

    useEffect(() => {

        mobileVersion()
        window.addEventListener('resize', mobileVersion)
    }, [])

    return (
        <ChatContext.Provider
            value={{
                handleToggleShowChats,
                showNavBarStatus: showNavBar,
                toggleChats,
                handleAddChat,
                chats,
                handleSetHome,
                stausHome,
                handleGptResponse,
                GptResponse,
                promptSize,
                handlePrompSize,
                handleRemoveChat,
                isSubmitting,
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}