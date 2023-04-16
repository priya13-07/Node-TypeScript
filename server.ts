const dotenv = require("dotenv");
dotenv.config();

import { App } from "./src/app";
import { middlewares } from "./src/middleware";
import { routes } from "./src/routes"

const PORT = parseInt(process.env.PORT || '8080') ;
const MONGO_URI = process.env.DB_URI;

const app = new App(PORT, middlewares , routes); 

app.listen();
app.mongoDB(MONGO_URI as string);