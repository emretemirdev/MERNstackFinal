import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import blogRouter from "./Routers/blogRouter.js";
import userRouter from "./Routers/userRouter.js";
import cors from "cors";



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/api", blogRouter);

app.listen(5000, () => {
  // connect to database
  mongoose
    .connect(process.env.URLMONGO)
    .then(() => console.log("Database bağlandı"))
    .catch((error) => console.log(error));
});


