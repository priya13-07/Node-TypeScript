const dotenv = require("dotenv");
dotenv.config();

import { App } from "./src/app";

const PORT = parseInt(process.env.PORT || '8080') ;
const MONGO_URI = process.env.DB_URI;

const app = new App(PORT, [] , []); 

app.listen();
app.mongoDB(MONGO_URI as string);