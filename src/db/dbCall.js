import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"
import dotenv from "dotenv";
dotenv.config({
    path:'./.env'
});
 const invokeDB = async function dbCall(){

    try {
       const currentInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log("Database connected succesfully");
       console.log(currentInstance.connection.host); 
    } catch (error) {
        console.log("Error is connecting to the DataBase dbCall.js", error);
        process.exit(1);
        
    }
}
export default invokeDB;