import { createStitches } from "@stitches/react";

export const {config, 
    styled,globalCss, 
    keyframes, 
    getCssText, 
    theme, 
    createTheme } = createStitches({
        media:{
            sm: '(max-width: 35em) ', // 560px
            md: '(max-width: 50em) ', // 768px
            lg: '(max-width: 72em) ', // 992px
            xl: '(max-width: 80em) ', // 1280px
            '2xl': '(max-width: 96em) ', // 1536px
        },
    
        theme:{

            colors:{
                white: '#fff',
                gpt_gray: '#212121',
                gpt_grayHover:'#262626',
                gpt_text:'#343541',
                purple_dark:"#00002E",
                purple_regular:'#3C46FF',
                purpleHover:"#0000FF",
                gpt_pink:"#D292FF",
                gpt_gray_text:'#676767',
                gpt_dark_gray:'#171717',
            },
    
            fontSizes:{
                sm:'0.80rem',
                md:'1.125rem',
                lg:'1.25rem',
                lx:'1.5rem',
                '2xl':"2rem"
            },

        }
})