import mongoose from "mongoose";
import invokeDB  from "./db/dbCall.js";
invokeDB();
// import express from "express";
// const app = express();
// // database connection written in IFEE nice module first way
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     // if there is error in listening to application
//     app.on("error", (error) => {
//       console.error("Error listening to application", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Application listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error", error);
//     throw error;
//   }
// })();
