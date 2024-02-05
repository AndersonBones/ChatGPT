import { createStitches } from "@stitches/react";

export const {config, 
    styled,globalCss, 
    keyframes, 
    getCssText, 
    theme, 
    createTheme } = createStitches({
        media:{
            sm: '(max-width: 35em) ', // 560px
            md: '(max-width: 48em) ', // 768px
            lg: '(max-width: 62em) ', // 992px
            xl: '(max-width: 80em) ', // 1280px
            '2xl': '(max-width: 96em) ', // 1536px
        },
    
        theme:{
            colors:{
                white: '#fff',
                gpt_gray: '#343541',
                gpt_grayHover:'#202123',
                gpt_text:'#343541',
                purple_dark:"#00002E",
                purple_regular:'#3C46FF',
                purpleHover:"#0000FF",
                gpt_versionHover:'#2f303a'
            },
    
            fontSizes:{
                sm:'0.75rem',
                md:'1.125rem',
                lg:'1.25rem',
                lx:'1.5rem',
                '2xl':"2rem"
            }
        }
})