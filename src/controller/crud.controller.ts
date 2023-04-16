import { BaseController } from "./base.controller";
import { Model } from "mongoose";
import { Response } from 'express';
import { StatusCodes } from "http-status-codes";

export class CRUDController <T> extends BaseController {
    constructor (private model : Model<T>){
        super()
    }

    private error_handler(res: Response, error : Error | any , status_codes : StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR){
        return res.status(status_codes).json(this.format_error(error))
    } 

    public async get( res: Response , query : any = {}) {
        try {
        const data = await this.model.find(query);
        return res.status(StatusCodes.OK).json(this.format_res(data));
    } catch (error : unknown){
        this.error_handler(res, error )
    }}

    public async getById(res : Response, id : any ){
        try{
            const data = await this.model.findById(id);
            if (data) {
            return res.status(StatusCodes.OK).josn(this.format_res(data));
            } else {
                this.error_handler(res, new Error('Not Found'), StatusCodes.NOT_FOUND);
            }
        } catch (error : unknown){
            this.error_handler(res, error);
        }
    }

    public async create (res: Response , document : any){
        try{
            const NewEntry = await this.model.create(document)
            return res.status(StatusCodes.CREATED).json(this.format_res(NewEntry, "Created successfully"));
        } catch(error){
            this.error_handler(res, error);
        }
    } 

    public async update (res: Response, id: any , data: any){
        try{
            const updatedData = await this.model.findByIdAndUpdate(id, data);
            return res.status(StatusCodes.OK).json(this.format_res(updatedData, "Updated successfully"));
        } catch(error) {
            this.error_handler(res,error);
        }
    }

    public async delete (res:Response , id: any){
        try{
            const data = await this.model.findByIdAndDelete(id);
            return res.status(StatusCodes.OK).json(this.format_res(data, "Deleted successfully"));
        } catch(error){
            this.error_handler(res,error);
        }
    }

}