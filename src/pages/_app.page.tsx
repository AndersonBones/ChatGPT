



import { ChatContextProvider } from "@/contexts/ChatContext";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import { globalStyles } from "@/styles/global";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { SessionProvider } from "next-auth/react";
globalStyles()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChatContextProvider>

        <Component {...pageProps} />


      </ChatContextProvider>
    </SessionProvider>


  )

}
