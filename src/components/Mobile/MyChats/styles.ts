import { keyframes, styled } from "@/styles";
import * as Dialog from '@radix-ui/react-dialog';




export const DialogContent = styled(Dialog.Content, {
    backgroundColor: 'black',
    position: 'fixed',
    top: 0,
    left: 0,

    height:'100%',
    color:'White',
});  


  
export const DialogOverlay = styled(Dialog.Overlay, {
    backgroundColor: 'black',
    opacity:'0.5',
    position: 'fixed',
    inset: 0,
    
});