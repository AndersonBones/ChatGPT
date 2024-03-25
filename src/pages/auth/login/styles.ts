import { styled } from "@stitches/react";

export const Container = styled('section',{
    backgroundColor:'$white',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100vh',

    'input, button':{
        padding:'1rem .5rem',
        borderRadius:'.3rem'
    },

    button:{
        cursor:'pointer',
        fontSize:'$md2'
    }
})

export const AuthHeader = styled('div',{
    padding:'1rem 0',    
})

export const AuthContainer = styled('div',{
    width:'21rem',
 
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    gap:'2rem',
    textAlign:'center',

   
    h1:{
        textAlign:'center',
        fontSize:'2rem',
        color:'$gpt_text'
    },

    a:{
        textDecoration:'none',
        color:'$green',
        
    }
})

export const AuthForm = styled('form',{
    
    display:'flex',
    flexDirection:'column',
    gap:'1.5rem',

    input:{
        border:'1px solid $DarkBorder',
        outline:'none',

        fontSize:'$md2',
        '&:focus':{
            border:'1px solid $green'
        }
    }
})

export const OpenAiPassword = styled('input',{

})
export const OpenAiEmail = styled('input',{
    
})
export const OpenAiLogin = styled('button',{
    background:'$green',
    color:'White',
    border:'none',
    '&:hover':{
        boxShadow:'inset 0 0 0 150px #0000001a'
    }
})

export const GoogleLogin = styled('button',{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'.5rem',
    background:'transparent',
    border:'1px solid $DarkBorder',

    '&:hover':{
        boxShadow:'inset 0 0 0 150px #0000001a'
    }
})

export const DividerWrapper = styled('div',{
    display:'flex',
    fontSize:'.9rem',
    gap:'.7rem',

    '&::before':{
        content:'',
        borderBottom:'1px solid $DarkBorder',
        flex:'1 0 auto',
        height:'.5rem',
        margin:'0'
    },

    '&::after':{
        content:'',
        borderBottom:'1px solid $DarkBorder',
        flex:'1 0 auto',
        height:'.5rem',
        margin:'0'
    },

})