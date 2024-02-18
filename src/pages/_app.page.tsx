



import { ChatContextProvider } from "@/contexts/ChatContext";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import { globalStyles } from "@/styles/global";
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
 
    <ChatContextProvider>
      <Component {...pageProps} />
    </ChatContextProvider>
    

    
      
  )
  
}
