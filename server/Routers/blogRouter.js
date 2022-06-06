import express from "express";
const router = express.Router();
import Note from '../models/blogModel.js';

router.route("/create").post((req, res) => {
        const title = req.body.title;
        const content = req.body.content;
        const newNote = new Note({
                title,
                content
        });
       newNote.save();
});



export default router;