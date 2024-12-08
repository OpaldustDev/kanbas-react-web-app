import "dotenv/config";
import express from 'express'
import mongoose from "mongoose";
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
const app = express()
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

mongoose.connect(CONNECTION_STRING);
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)