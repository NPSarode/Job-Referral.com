import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose
    .connect(process.env.DATABSE_URI, {
      dbName: process.env.DATABSE_NAME
    })
    .then(() => {
      console.log(`Database connected with ${process.env.DATABSE_URI}`)
      console.log(`Connected with ${process.env.DATABSE_NAME} databse`)
    })
    .catch((err) => {
      console.log(err);
    });
};
