import {model, models, Schema} from 'mongoose'

interface IUser{
    email:string
    name:string
    password:string
    birthday:string
}

const UserSchema = new Schema(
    {
        birthday:String,
        email:String,
        name:String,
        password:String
    },

    {
        timestamps: true,
        
    },
)

export const User = models.user || model('user', UserSchema)