import { Document , Schema , model } from "mongoose";
import z from "zod";

export const moviesValidator = z.object({
    shows: z.string().trim().toLowerCase().min(5, "Name should be greater than or equal to 3 chars.").max(100, "Name should be lesser than or equal to 100 chars."),
    release_dates : z.date(),
   
    
})

type Movies = z.infer<typeof moviesValidator>
export interface IMovies extends Movies, Document {};

const MoviesSchema = new Schema<IMovies>({
    shows : {
        type : String,
        trim : true,
        toLowerCase : true,
        required : true,
        minlength : 5,
        maxlength : 100
    },
    release_dates : {
        type : Date,
        required : true 
    }
}, {
    timestamps : true
})

export const Movies = model<IMovies>("Movies", MoviesSchema);