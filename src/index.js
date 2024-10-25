
import connectDb from "./db/index.js";
import dotenv from "dotenv"


dotenv.config({
    path: "./env"
})


connectDb()
.then()
.catch((err)=>{
    console.log("Mongo Db connected faild",err)
})