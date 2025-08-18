import mongoose from "mongoose";
import invokeDB from "./db/dbCall.js";
import app from "./apps.js";
invokeDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Error listening to application", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect with MongoDB", err);
  });

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
