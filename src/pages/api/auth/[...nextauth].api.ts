import { api } from "@/utils/axios";
import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export function buildNextAuthOptions(req: NextApiRequest | NextPageContext['req'], res: NextApiResponse | NextPageContext['res']): NextAuthOptions {
  return {


    providers: [
      CredentialsProvider({

        name: "Credentials",

        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },

        async authorize(credentials, req) {

          // const user = await api.post("/user/login", {
          //   email: credentials?.email,
          //   password: credentials?.password
          // })

          // if (!user.data) {
          //   return null
          // }

          // return user.data

          console.log({credentials})
          return null


        }
      })
    ],

    session: {
      strategy: 'jwt'
    },

    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.email = user.email
          token.name = user.name
        }

        return token

      },

      async session({ session, token }) {
        if (session.user) {
          session.user.email = token.email
          session.user.name = token.name
        }
        console.log(session)
        return session
      }
    },

    secret:process.env.NEXTAUTH_URL!,

    pages: {
      signIn: "/auth/login"
    }
  }
}



export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}