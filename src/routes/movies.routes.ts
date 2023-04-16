import {Request, Response, Router} from 'express';
export const moviesRouter = Router();
import { CRUDController } from "../controller/crud.controller";
import { IMovies, Movies } from "../schemas/movies.schema";

export class MoviesController extends CRUDController<IMovies>{ 
    // we can write specific queries here which is not standard.
}
const _moviesController = new MoviesController(Movies);

moviesRouter.get('/all', (req: Request ,res : Response ) => _moviesController.get(res,{}))
moviesRouter.get('/get/:movies_id', (req: Request ,res : Response ) => _moviesController.getById(res, req.params.movies_id))
moviesRouter.post('/create', (req: Request ,res : Response ) => _moviesController.create(res, req.body))
moviesRouter.put('/update/:movies_id', (req: Request ,res : Response ) => _moviesController.update(res, req.params.movies_id, req.body))
moviesRouter.delete('/delete/:movies_id', (req: Request ,res : Response ) => _moviesController.delete(res, req.params.movies_id))