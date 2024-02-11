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
    

    '&.navbar':{
        paddingBottom:'0.5rem',
        borderBottom:'1px solid $gpt_gray_text'
    }
  
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

export const ChatGPTInfo = styled('div',{
    display:"flex",
    flexDirection:"column",
    justifyContent:'center',
    alignItems:"center",
    color:'White',
    fontSize:'$lx',
    fontWeight:600,
    gap:'0.75rem',

})

export const ChatContent = styled('div',{
    
    margin:'0 auto',
    width:'50rem',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',

    
    '@lg': {
        width:'100%'  
    },

    
   
})

export const GPTPromptContainer = styled('div',{
    padding:'0.5rem 0.75rem',
    display:"flex",
    border:'1px solid $gpt_gray_text',
    borderRadius:'1.125rem',
    overflow:"hidden",
    alignItems:'center',
    height:'auto',
})

export const GPTPrompt = styled('textarea',{
    display:'flex',
    alignItems:'center',
    maxHeight:'20rem',
    overflowY:'hidden',
    width:'100%',
    
    resize:'none',
    backgroundColor:'transparent',
    border:'none',

    '&::placeholder':{
        fontSize:'$md',
       
    },
    color:'White',
    fontSize:'$md',
    outline:'none',
})

export const SendMesage = styled('button',{
    borderRadius:'0.75rem',
    padding:'0.50rem',
    backgroundColor:'$gpt_grayHover',
    border:'none',
    
})

export const ChatGPT = styled('div',{
    width:'100%',
    height:'100%',

    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
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
