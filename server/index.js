import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
 Blog.find({})
 .then(items => res.json(items))
 .catch(err => console.log(err))
  
  });
//DATABASE VERİLERİ
const data  = [
  {
    title: "E-Ticaret Vergi Muafiyeti Nedir?",
    description: "Ticari faaliyet yürüten kişiler, bu faaliyetlerinden elde ettikleri gelirlerin vergisini ödemekle yükümlüdür. Bu vergiyi ödemek için ise şirket sahibi olmaları gerekir. Bu gibi zorunlulukların olması küçük sermayelerle e-ticarete başlayacak olan kişileri oldukça zorlamaktaydı. ",
    url: "https://eticareturkiye.com/wp-content/uploads/2022/05/ev-hanimlarina-e-ticarette-vergi-muafiyeti.jpg"  
}
]
const BlogSchema = new mongoose.Schema({
title: String,
description: String,
url: String,
});

const Blog = mongoose.model("Blog", BlogSchema)


//DATABASE VERİ GÖNDERMEK İSTEDİĞİM ZAMAN YORUM SATIRINDAN ÇIKARTIYORUM :)
 /*data.forEach(blogData =>{
  const newData = new Blog({
    title: blogData.title,
    description: blogData.description,
    url : blogData.url,
  })
  newData.save()
});*/

app.listen(5000, () => {
  // connect to database
  mongoose
    .connect(process.env.URLMONGO)
    .then(() => console.log("Database bağlandı"))
    .catch((error) => console.log(error));
});

