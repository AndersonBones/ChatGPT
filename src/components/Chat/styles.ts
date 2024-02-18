import { styled } from "@/styles/index";

export const ChatGPTContainer = styled('main',{

    padding:'1rem',
    display:'flex',
    flexDirection:'column',

    position:'relative',
    width:'100%',
    backgroundColor:'$gpt_gray',


})

export const ChatGPTHeader = styled('header',{

    width:'100%',
    display:'flex',
    alignItems:'center',

    gap:'.75rem',
    


  
})



export const ChatVersion = styled('button',{
    backgroundColor:"transparent",
    color:"White",
    padding:'0.5rem',
    borderRadius:'0.5rem',
    border:"none",
    cursor:'pointer',
    fontWeight:600,
    fontSize:'$md',

    '&:hover':{
        backgroundColor:'$gpt_grayHover'
    }
})



export const HideMyChats = styled('button',{
    backgroundColor:'transparent',
    border:'none',
    color:'$gpt_gray_text',
    fontWeight:'bord',
    cursor:'pointer',
    position:'absolute',
    
    bottom:'50%',

    transform:'translate(-50%, 50%)',

    '&:hover':{
        color:'White',
        transition:'.3s ease'
    }
})
