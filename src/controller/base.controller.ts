export class BaseController {

    private _formatter (data : any, message: string = 'Ok', success: boolean  = true)  {
       if(success == false && data.code == 11000){
        message: ``;
        Object.keys(data.keyvalue).forEach(key => {
            message += ` ${key} : ${data.keyvalue[key]} already exist in our record. `
        })
       }

       if( success == false && data.name == "validationError") message = data.message;
       
       return { data, success, message}
    }
     
    public format_res (data: any , message: string = 'Ok')  {
        return this._formatter (data, message, true)
    }

    public format_error (error: Error , message: string = "Something went wrong") {
        return this._formatter (error , message, false )
    }
}