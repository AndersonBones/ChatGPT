import { styled } from "@stitches/react";

export const MyChatsContainer = styled('div',{
    width:'22rem',
    backgroundColor:'Black',
    padding:'1rem'
})

export const NewChatContainer = styled('div',{
    display: "flex",
    justifyContent:'space-between',
    cursor:'pointer',
    color:'White',
    borderRadius:'0.75rem',
    padding:'.5rem',

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

export const NewChatLogoContainer = styled('div',{
    width:30,
    height:30,
    borderRadius:'50%',
    backgroundColor:'White'
})

export const NewChatButton = styled('button',{
    cursor:'pointer',
    border:'none',
    backgroundColor:'transparent',
    color:'White'
})