
import { globalStyles } from '@/styles/global'

import Mychats from '@/components/MyChats/Mychats'
import { Container } from './styles'
import ChatContainer from '@/components/Chat/Chat'
globalStyles()


export default function Home() {
    return (
        <Container>
            <Mychats></Mychats>
            <ChatContainer></ChatContainer>
        </Container>
            
        
              
    )
  }
