import mongoose from "mongoose";


const connectDb = async ()=>{

    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
       console.log(`\n MongoDb connected !! DB HOST:
         ${connectionInstance.connection.host}`)
    } catch (error){
        console.error(" MongoDb connection error",error)
        process.exit(1)
    }
}

export default connectDb;