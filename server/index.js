import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import cors from "cors";
import blogRouter from "./Routers/blogRouter.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/", blogRouter);

app.listen(proces.env.port || 5000, () => {
  // connect to database
  mongoose
    .connect(process.env.URLMONGO)
    .then(() => console.log("Database bağlandı"))
    .catch((error) => console.log(error));
});

function newFunction() {
  return require("./models/blogModel");
}
