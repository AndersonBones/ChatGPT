import { styled } from "@/styles"



export const ChatGPTInfo = styled('div',{
    display:"flex",
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',

    color:'White',
    fontSize:'$lx',
    fontWeight:600,
    gap:'0.75rem',

})


export const ChatGPT = styled('div',{
    width:'100%',

    overflowY:'auto',
    color:'$white',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    margin:'0 auto',
   
})


export const InputMessage = styled('div',{
    display:'flex',
    flexDirection:"column",
    gap:'.3rem',
 
})

export const MessageHeader = styled('div',{
    display:"flex",
    gap:'1rem',
})
export const MessageBody = styled('div',{
    
    paddingLeft:'2.5rem',
})

export const MessageLogo = styled('div',{
    
    width:'1.5rem',
    height:'1.5rem',

    img:{
        width:'100%',
        height:'100%',
    }
})

export const MessageName = styled('div',{
    display:'flex',
    alignItems:'center',
})
export const OutputMessageContainer = styled('div',{
    display:'flex',
    flexDirection:"column",
    gap:'.3rem',
})

export const OutputGPT = styled('p',{
    lineHeight:'1.7rem'
})

export const Conversation = styled('div',{
    width:'45rem',
    margin:'0 auto',
    display:'flex',
    flexDirection:'column',
    gap:'2rem',
    justifyContent:'flex-start',
    padding:'3rem',
    '@md':{
        width:"80%",
    }
})