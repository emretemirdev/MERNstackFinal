import express from "express";
const router = express.Router();
import Note from '../models/blogModel.js';

router.route("/create").post((req, res) => {
        const title = req.body.title;
        const content = req.body.content;
        const Blog = new Note({
                title,
                content
        })
       Blog.save();
})
export default router;