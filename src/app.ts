import { Application } from 'express'
import { IRoute } from './types';
const mongoose = require("mongoose");


const express = require("express");
 

export class App {
    private app : Application
    private apiPath : string = "api";


    constructor(
        private port : number,
        private middlewares : Array<any>,
        private routes : Array<IRoute> 
    ){
        this.app = express();
        this.applyMiddlewares(middlewares);
        this.applyRoutes(routes);
    }

    private applyMiddlewares ( middlewares : Array<any>){
        middlewares.forEach(middleware => {  
            this.app.use(middleware)
        })
    }

    private applyRoutes ( routes : Array<IRoute>){
        routes.forEach(({path, router}) => {
            if(path[0]=== '/' ){
                path = path.substring(1)
            }
            const _path = `/${this.apiPath}/${path}`
           this.app.use(path, router)
        })
    }

    public listen(){
        this.app.listen(this.port , () => {
            console.log(`server started on port ${this.port}`)
        })
    }

    public mongoDB(uri: string) {
        const connect = () => {
            mongoose.set('strictQuery', false);
            mongoose.connect(uri).then(() => {
                console.log("DB connected successfully.")
            }).catch((error: Error) => {
                console.log(error);
                return process.exit(1);
            });
        };

        connect();

        // event listener.
        mongoose.connection.on("disconnected", connect);
    }

}