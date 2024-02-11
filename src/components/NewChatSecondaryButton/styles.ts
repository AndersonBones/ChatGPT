import { styled } from "@/styles";

export const NewChatSecondaryButton = styled('button',{
    cursor:'pointer',
    backgroundColor:"transparent",
    color:'White',
    padding:'0.5rem',
    borderRadius:'0.5rem',
    border:'none',
    
    '&.borderActive':{
        border:'1px solid $gpt_gray_text'
    },
    '&:hover':{
        backgroundColor:'$gpt_grayHover',
    }
})
