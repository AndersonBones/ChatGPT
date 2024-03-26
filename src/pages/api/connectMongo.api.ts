import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";



export default async function handler(req: NextApiRequest, res:NextApiResponse) {

    if(req.method === "GET"){
        
        try {
            const client = await mongoose.connect(process.env.MONGO_DB as string, {
                dbName:'gptDatabase'
            })
            const connection = client.connection


            return res.status(200).json({ success: "Conexão com banco de dados bem sucedida" });
        } catch (error) {
            return res.status(401).json({ error });
        }
    }else{
        return res.status(400).json({ error:"Metodo incorreto"});
    }
    
}