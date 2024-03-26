// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@/models/users";
import { Console } from "console";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.method === "POST"){
    const {name, email, birthday, password} = req.body

    try {

      const newUser = await User.create({
        name, email, birthday, password
      })

      res.redirect('/chat')
      // return res.status(200).json({newUser})
    }catch (error) {
      return res.status(400).json({error})
    }
    
    
  }

  return res.status(400).json({status:"success"})

}