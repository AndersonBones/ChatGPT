import {model, models, Schema} from 'mongoose'

interface IUser{
    email:string
    name:string
    password:string
    birthday:string
}

const UserSchema = new Schema<IUser>(
    {
        birthday:String,
        email:String,
        name:String,
        password:String
    },

    {
        timestamps: true,
        toJSON: {
            versionKey: false,
            virtuals: true,
            transform: (_, ret) => {
                delete ret._id;
            },
        },
    },
)

export const User = models.user = model('user', UserSchema)