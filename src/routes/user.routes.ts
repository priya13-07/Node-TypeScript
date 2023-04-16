import {Request, Response, Router} from 'express';
export const userRouter = Router();
import { CRUDController } from "../controller/crud.controller";
import { IUser, User } from "../schemas/user.schema";

export class UserController extends CRUDController<IUser>{ 
    // we can write specific queries here which is not standard.
}
const _userController = new UserController(User);

userRouter.get('/all', (req: Request ,res : Response ) => _userController.get(res,{}))
userRouter.get('/get/:user_id', (req: Request ,res : Response ) => _userController.getById(res, req.params.user_id))
userRouter.post('/create', (req: Request ,res : Response ) => _userController.create(res, req.body))
userRouter.put('/update/:user_id', (req: Request ,res : Response ) => _userController.update(res, req.params.user_id, req.body))
userRouter.delete('/delete/:user_id', (req: Request ,res : Response ) => _userController.delete(res, req.params.user_id))