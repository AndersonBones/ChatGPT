import { styled } from "@stitches/react";

export const ChatGPTContainer = styled('main',{
    padding:'1rem',
    display:'flex',
    flexDirection:'column',
    
    width:'100%',
    backgroundColor:'$gpt_gray',
})

export const ChatGPTHeader = styled('header',{
    width:'100%',
    display:'flex',
    alignItems:'center',
    
    borderRadius:'6px',
  
})

export const ChatVersion = styled('button',{
    backgroundColor:"transparent",
    color:"White",
    padding:'1rem',
    borderRadius:'0.75rem',
    border:"none",
    cursor:'pointer',
    fontWeight:600,
    fontSize:'$md',

    '&:hover':{
        backgroundColor:'$gpt_versionHover'
    }
})