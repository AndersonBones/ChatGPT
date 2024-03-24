import { globalCss } from "."

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: 'sans-serif',

        scrollbarColor: '#676767 transparent',
        
    },

    body:{
        backgroundColor:"$gpt_gray",
    
    }

})