import { styled } from "@/styles/index";


export const MyChatsContainer = styled('div',{
    width:0,
    padding:0,
    height:'100vh',
    backgroundColor:'Black',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    
    transition:'.3s ease',
    '&.showChats':{
        visibility:'visible',
        width:'18rem',
        
    },
    
})

export const MyChats = styled('div',{
    backgroundColor:'$gpt_dark_gray',
    display:'grid',
    gridTemplateRows:'3.5rem 1fr',
    
    height:'100%',
    padding:'.75rem',
    gap:'1rem',
})

export const ChatsList = styled('div',{
    display:'flex',
    flexDirection:'column',
    color:'$white',
    gap:'.5rem',
    overflowY:'auto',

})

export const ChatItemContainer = styled('div',{
    display:"grid",
    gridTemplateColumns:'80% 20%',
    alignItems:'center',
    padding:'.5rem',
    fontSize:'$sm',
    
    border:'none',
    borderRadius:'0.75rem',
    cursor:'pointer',
    gap:'.5rem',

    backgroundColor:'transparent',
    '&:hover':{
        backgroundColor:'$gpt_grayHover'
    },

    button:{
        cursor:'pointer',
        border:'none',
        color:'$gpt_gray_text',
        fontSize:'$md',
        backgroundColor:'transparent',
        transition:'.2s ease',
        '&:hover':{
            color:'$white',
            
        },
    },

    
})

export const ChatActions = styled('div',{
    display:'flex',
    gap:'.5rem',
    alignItems:'center',
  

    button:{
        display:'flex',
        justifyContent:'center'
    }
})
export const ChatTitle = styled('span',{
    color:'$white',
    overflow:'hidden'
})

export const EditChat = styled('button',{
    
})
export const DeleteChat = styled('button',{
    
})

export const NewChatContainerButton = styled('button',{
    cursor:'pointer',
    border:'.2rem solid $gpt_grayHover',
    backgroundColor:'transparent',
    color:'White',
    display: "flex",
    alignItems:'center',
    justifyContent:'space-between',

    borderRadius:'0.75rem',
    padding:'0 .5rem',

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

export const FooterChatList = styled('div',{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'.5rem',
    border:'.2rem solid $gpt_grayHover',
    borderRadius:'0.75rem',
})

export const UserProfile = styled('div',{
    display:'flex',
    alignItems:'center',

    gap:'.8rem',
    

    span:{
        color:'white',
    }
})

export const Logout = styled('div', {
    color:'white',
    cursor:'pointer',
})

