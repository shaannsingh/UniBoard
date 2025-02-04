import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {
  return mongoose
    .connect(process.env.MONGODB_URI || "")
    .then((conn) => {
      console.log(`Connected to server: ${conn.connection.host}`);
      return conn;
    })
    .catch((error) => {
      console.log("Connection error:", error);
      process.exit(1);
    });
};

export default connectDB;
