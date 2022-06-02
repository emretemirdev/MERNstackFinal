import mongoose from 'mongoose'

const notesSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("Note", notesSchema);

export default Note;