import ChatContainer from "@/components/Chat/Chat";
import RootLayout from "@/components/Layout/Layout";
import { globalStyles } from "@/styles/global";
globalStyles()

export default function Chats(){
    return (
        
        <RootLayout>
            <ChatContainer></ChatContainer>
        </RootLayout>
        

    )
}