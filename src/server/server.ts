import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/database-connect";
import morgan from "morgan";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

connectDB()
  .then(() => {
    console.log("Server running on port 3000");
    app.listen(3000);
  })
  .catch((error) => {
    console.log("Server setup failed:", error);
  });
