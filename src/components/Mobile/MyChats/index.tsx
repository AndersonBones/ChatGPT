import NavBar from '@/components/NavBarButton';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogOverlay, DialogContent } from './styles'
import Mychats from '@/components/MyChats';
import { NavBarContainer } from '@/components/NavBarButton/styles';
import { useContext } from 'react';
import { ChatContext } from '@/contexts/ChatContext';



export default function MyChatsMobile() {
    const { handleToggleShowChats, toggleChats } = useContext(ChatContext)
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild >
                <NavBarContainer onClick={()=>{console.log(toggleChats)}}>
                    <NavBar />
                </NavBarContainer>
                

            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogOverlay />

                <DialogContent css={{ width: `${20}rem` }}>

                    <Mychats widthInRem={20} />

                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}