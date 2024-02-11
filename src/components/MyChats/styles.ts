import { styled } from "@/styles/index";
import {Content} from '@radix-ui/react-hover-card'

export const MyChatsContainer = styled('div',{
    width:0,
    padding:0,
    backgroundColor:'Black',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    


    '&.showChats':{
        visibility:'visible',
        width:'20rem',
        
    },
   
    transition:'.3s ease'
})

export const MyChats = styled('div',{
    backgroundColor:'Black',
    display:'grid',
    gridTemplateRows:'3.5rem 1fr',
    width:'20rem',
    height:'100%',
    padding:'1rem',
})

export const ChatsList = styled('div',{
   
})

export const NewChatContainer = styled('div',{
    display: "flex",
    justifyContent:'space-between',
    cursor:'pointer',
    color:'White',
    borderRadius:'0.75rem',
    padding:'0 .5rem',

    '&:hover':{
        backgroundColor:'$gpt_grayHover'
    },

})

export const NewChatTitle = styled('div',{
    display:'flex',
    alignItems:'center',
    
    gap:'0.5rem',
    fontSize:'$sm'
})



export const NewChatPrimaryButton = styled('button',{
    cursor:'pointer',
    border:'none',
    backgroundColor:'transparent',
    color:'White',

})
