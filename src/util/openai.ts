import openAI from 'openai'
import { api } from './axios'
import { Message } from '@/contexts/ChatContext'

const openaiConfig = new openAI({
    organization:"org-yAZfagseFNu0nyW0TXxBpbtm",
    apiKey:'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',
    dangerouslyAllowBrowser:true,
})

interface InputUser{
    input:string,
    autor: 'user' | 'assistant'
}

interface GptMessages{
    content:string,
    role: 'user' | 'assistant'
}


export const openai = {
    getMessage: async  (messages:GptMessages[]) => {

        try {
            const completion = await openaiConfig.chat.completions.create({
                messages,
                model: "gpt-3.5-turbo",
                temperature:0.6,
            })
        
            const {choices} = completion
                
            
            return choices[0].message 
        } catch (error) {
            return {
                content:"Estamos com problemas para responder...",
                role:"error"
            }
        }
        
        
        
    },

    translateMessages: (messages:Message[]) =>{
        let reqMessages: GptMessages[] = []
    
        for(let i in messages){
            reqMessages.push({
                role:messages[i].author === 'user' ? 'user' : 'assistant',
                content: messages[i].content
            })
        }
    
        return reqMessages
    }

}   
