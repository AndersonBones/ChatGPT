import { useContext } from "react";
import GPTLogo from "../Logo/GPTLogo";
import PromptContainer from "../Prompt";
import { ChatGPT, ChatGPTInfo, Conversation, InputMessage, MessageBody, MessageHeader, MessageLogo, MessageName, OutputGPT, OutputMessageContainer } from './styles'
import { ChatContext } from "@/contexts/ChatContext";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/user.png'
import Image from "next/image";
import GptCircle from "../GptCircle";

import Code from '@uiw/react-codemirror'
export default function ChatConversation() {
    const { stausHome, chats, GptResponse, handleGptResponse, promptSize, isSubmitting } = useContext(ChatContext)
    const router = useRouter()

    const { chatId } = router.query
    const currentChat = chats.filter((chat) => chat.chatId == chatId)

    const hasCurrentChat = currentChat.length > 0

    // sizes
    const headerSizePX = 64
    const initialPromptSize = 88



    return (
        <ChatGPT css={!stausHome ? { justifyContent: "flex-start", gap: '3rem', height: `calc(100% - ${headerSizePX + (initialPromptSize + promptSize)}px)` }
            : { justifyContent: "center", height: `calc(100% - ${headerSizePX + (initialPromptSize + promptSize)}px)` }}>

            <Conversation >
                {stausHome && (

                    <ChatGPTInfo >
                        <GPTLogo size={3} background="$green"></GPTLogo>
                        <span>Como posso ajudá-lo hoje?</span>
                    </ChatGPTInfo>
                )}

                {hasCurrentChat && (
                    currentChat[0].messages.map((chat) => {
                        return (
                            <>
                                {chat.author == 'user' && (
                                    <InputMessage key={uuidv4()}>

                                        <MessageHeader>
                                            <MessageLogo>
                                                <Image src={logo} alt="User Logo" />
                                            </MessageLogo>

                                            <MessageName>
                                                <strong>You</strong>
                                            </MessageName>
                                        </MessageHeader>

                                        <MessageBody >
                                            <p>{chat.content}</p>
                                        </MessageBody>

                                    </InputMessage>
                                )}




                                {chat.author == "assistant" && (
                                    <OutputMessageContainer key={uuidv4()} >

                                        <MessageHeader>
                                            <MessageLogo>
                                                <GPTLogo size={1.5} background="$green"></GPTLogo>
                                            </MessageLogo>

                                            <MessageName>
                                                <strong>ChatGPT</strong>
                                            </MessageName>
                                        </MessageHeader>


                                        <MessageBody >

                                            <OutputGPT>
                                                {chat.content as string}

                                            </OutputGPT>

                                        </MessageBody>

                                    </OutputMessageContainer>
                                )}

                                {chat.author == "error" && (
                                    <OutputMessageContainer key={uuidv4()} >

                                        <MessageHeader>
                                            <MessageLogo>
                                                <GPTLogo size={1.5} background="$green"></GPTLogo>
                                            </MessageLogo>

                                            <MessageName>
                                                <strong>ChatGPT</strong>
                                            </MessageName>
                                        </MessageHeader>


                                        <MessageBody >

                                            <OutputGPT>
                                                {chat.content as string}

                                            </OutputGPT>

                                        </MessageBody>

                                    </OutputMessageContainer>
                                )}




                            </>
                        )
                    })
                )}
            </Conversation>





        </ChatGPT>

    )


}