import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import * as dotenv from 'dotenv';
dotenv.config()
// const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(process.env.PORT||PORT, ()=> console.log('Server up and running...'));