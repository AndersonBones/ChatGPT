import { styled } from "@/styles"

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


export const ChatGPT = styled('div',{
    width:'100%',
    height:'100%',

    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
})
