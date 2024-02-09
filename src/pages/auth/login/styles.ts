import { styled } from "@stitches/react";

export const Container = styled('section',{
    backgroundColor:'transparent',
    display:'flex',
    
    
})

export const LoginHeader = styled('header',{

})

export const LoginTitle = styled('h1',{
    color:'$gpt_pink',
    display:'flex',
    alignItems:'center',

})

export const LoginHero = styled('div',{
    padding:'1.5rem 1rem',
    width:'100%',
    height:'100vh',
    backgroundColor:'$purple_dark'
})

export const LoginContainer = styled('div',{
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    width:'70%',
    height:'100vh',
    backgroundColor:'black'
})


export const GetStartedContainer = styled('div',{
   
    display:'flex',
    flexDirection:'column',
    gap:'1rem',
})

export const GetStartedButton = styled('button',{
    padding:'1rem 5rem',
    borderRadius:'8px',
    cursor:'pointer',
    fontWeight:600,
    color:'White',
    backgroundColor:'$purple_regular',
    border:'none',
    fontSize:'1.025rem',

    '&:hover':{
        backgroundColor:'$purpleHover'
    }
})

export const GetStartedButtonContainer = styled('div',{
    display:"flex",
    gap:'.5rem',
})
export const GetStartedTitle = styled('div',{
    textAlign:'center',
    color:'White',
    fontWeight:600,
    fontSize:'$md',

   
})

export const MessageHeroContainer = styled("div",{

    height:'100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:"center",
   

    h1:{
        color:'$gpt_pink',
        fontSize:'$2xl',
    }
})