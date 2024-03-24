import { keyframes, styled } from "@/styles";
import { FaCircle } from "react-icons/fa";

const animation = keyframes({
    '0%': {
        fontSize:'$sm',
        color:'$green',
        
    },

    '25%': {
        fontSize:'$md2',
        color:'$white'
    },

    '50%': {
        fontSize:'$md',
        color:'$green'
    },

    '75%': {
        fontSize:'$md2',
        color:'$white'
    },

    '100%': {
        fontSize:'$sm',
        color:'$green'
    }
})

export const CircleContainer = styled(FaCircle,{
    // color:'$white',
    animation:`${animation} 1s `,
    animationIterationCount:'infinite',
    width:'2rem',
})