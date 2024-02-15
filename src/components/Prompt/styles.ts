import { styled } from "@/styles";
import * as ScrollArea from '@radix-ui/react-scroll-area';


export const GPTPromptContainer = styled('div',{
    padding:'0.5rem 0.75rem',
    display:"flex",

    border:'1px solid $gpt_gray_text',
    borderRadius:'1.125rem',
    maxHeight:'50rem',
    gap:'.5rem',
    alignItems:'center',
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
        fontSize:'$md',
       
    },
    color:'White',
    fontSize:'$md',
    outline:'none',

})



export const SendMessage = styled('button',{
    borderRadius:'0.75rem',
    padding:'0.50rem',
    marginTop:'auto',
    color:'black',
    border:'none',
    
})