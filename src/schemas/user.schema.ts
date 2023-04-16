import { Document , Schema , model } from "mongoose";
import z from "zod";

export const userValidator = z.object({
    name: z.string().trim().toLowerCase().min(3, "Name should be greater than or equal to 3 chars.").max(100, "Name should be lesser than or equal to 100 chars."),
    phone : z.number(),
    tickets: z.number()
    
})

type User = z.infer<typeof userValidator>
export interface IUser extends User, Document {};

const UserSchema = new Schema<IUser>({
    name : {
        type : String,
        trim : true,
        toLowerCase : true,
        required : true,
        minlength : 3,
        maxlength : 100
    },
    phone : {
        type : Number,
        required : true 
    },
    tickets : {
        type : Number,
        required : true 
    }
}, {
    timestamps : true
})

export const User = model<IUser>("User", UserSchema);