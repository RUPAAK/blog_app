const mongoose= require('mongoose')

const commentSchema= mongoose.Schema({
    comment_text: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Comment= mongoose.model("Comment", commentSchema)

module.exports= Comment