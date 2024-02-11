import { NotePencil } from "phosphor-react";
import { NewChatSecondaryButton } from "./styles";
import { useRouter } from "next/router";



interface NewChatButtonProps{
    border:boolean
}   
export default function NewChatSecondaryBtn({border}:NewChatButtonProps){
    const router = useRouter()

    const handleNewChat = async ()=>{
        await router.push('/chats')
        
    }
    return(
        <NewChatSecondaryButton className={border ? "borderActive" : ""} onClick={handleNewChat}>
            <NotePencil size={20} />
        </NewChatSecondaryButton>
    )
}