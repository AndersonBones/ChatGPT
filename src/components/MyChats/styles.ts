import { styled } from "@/styles/index";


export const MyChatsContainer = styled('div',{
    width:0,
    padding:0,
    height:'100vh',
    backgroundColor:'Black',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    
    

    '&.showChats':{
        visibility:'visible',
        width:'18rem',
        
    },
   
    transition:'.3s ease'
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
    gap:'.5rem'
})

export const ChatListItem = styled('button',{
    borderRadius:'0.75rem',
    padding:'.75rem',
    fontSize:'$sm',
    cursor:'pointer',
    border:'none',
    backgroundColor:'transparent',
    '&:hover':{
        backgroundColor:'$gpt_grayHover'
    },
    color:'$white',
    textAlign:'start'
})

export const NewChatContainerButton = styled('button',{
    cursor:'pointer',
    border:'none',
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

