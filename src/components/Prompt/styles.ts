import { styled } from "@/styles";
import * as ScrollArea from '@radix-ui/react-scroll-area';

export const GPTPromptContainer = styled('div',{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    
    position:'absolute',
    left:0,
    bottom:0,
})

export const GPTPromptForm = styled('form',{
    width:'45rem',
    margin:'auto',
    padding:'0.5rem 0.75rem',
    display:"flex",
   
    border:'1px solid $gpt_gray_text',
    borderRadius:'1.125rem',
    maxHeight:'50rem',
    alignItems:'center',
    overflowY:'auto',

    '@md':{
        width:"80%",
    }
})

export const Disclaim = styled('p',{
    textAlign:'center',
    padding:'.5rem 0',
    fontSize:"$sm",
    color:"$gpt_gray_text"
})

export const GPTPrompt = styled('textarea',{
    display:'flex',
    alignItems:'center',
    width:'100%',
    maxHeight:'100%',
    resize:'none',
    backgroundColor:'transparent',
    border:'none',
    
    '&::placeholder':{
        fontSize:'$md2',
        
    },
    color:'White',
    fontSize:'$md2',
    outline:'none',

})



export const SendMessage = styled('button',{
    borderRadius:'0.75rem',
    padding:'0.50rem',
    marginTop:'auto',
    color:'white',
    border:'none',
    
})