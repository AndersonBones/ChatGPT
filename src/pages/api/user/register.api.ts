
import db from "@/utils/firebase";
import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { id, name, email, birthday, password } = req.body


    try {
      const q = query(collection(db, "users"), where("email", "==", email))
      const hasUser = await getDocs(q)
     

      if (hasUser.docs[0]) {

        return res.status(404).json({status:404, message: "User already exists" })

      }else{

        const newUser = await addDoc(collection(db, "users"), {
          id,
          name, 
          email, 
          birthday, 
          password: bcrypt.hashSync(password, 10)
        })
  
        return res.status(200).json({status:200, message: "user successfully registered", data:newUser })
      }
      

    } catch (error) {
      return res.status(400).json({ error })
    }


  }

  return res.status(400).json({ status:400, message: "incorrect method." })

}