
import db from "@/utils/firebase";
import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {email, password } = req.body


    try {
      const q = query(collection(db, "users"), where("email", "==", email))
      const hasUser = (await getDocs(q)).docs[0].data()
      
      const compareHash = bcrypt.compareSync(password, hasUser.password)
    
      if (hasUser) {
        if(compareHash){
            return res.status(200).json({status:200, message: "logged in user",data:hasUser})
        }else{
            return res.status(401).json({status:401, message: "incorrect email or password"})
        }
        

      }else{
  
        return res.status(404).json({status:404, message: "User not found"})
      }
      

    } catch (error) {
      return res.status(400).json({ error })
    }


  }

  return res.status(400).json({ status:400, message: "incorrect method." })

}