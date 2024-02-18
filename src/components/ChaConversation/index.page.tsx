import GPTLogo from "../Logo/GPTLogo";
import PromptContainer from "../Prompt";
import {ChatContent,ChatGPT, ChatGPTInfo} from './styles'


export default function ChatConversation() {
    return (
        <ChatContent className='md:container md:mx-auto'>

            <ChatGPT>
                <ChatGPTInfo>
                    <GPTLogo size={60}></GPTLogo>
                    <span>Como posso ajudá-lo hoje?</span>
                </ChatGPTInfo>

            </ChatGPT>

            <PromptContainer />
        </ChatContent>
    )
}