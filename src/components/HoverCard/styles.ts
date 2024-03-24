import { styled } from "@/styles";
import { Content, Portal, Trigger } from "@radix-ui/react-hover-card";

export const HoverCardContent = styled(Content, {
    fontSize:"$sm",
    color:'White',
    backgroundColor:"Black",
    padding:'0.75rem',
    borderRadius:'0.5rem',

})

export const HoverCardPortal = styled(Portal,{
    padding:'2rem',
})

