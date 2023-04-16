import { IRoute } from "../types"
import { userRouter } from "./user.routes"
import { moviesRouter } from "./movies.routes"

export const routes : IRoute[] = [
    {
        path : 'v1/user',
        router : userRouter
    },
    {
        path : 'v1/movies',
        router : moviesRouter
    }
]

