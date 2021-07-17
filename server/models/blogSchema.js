const mongoose= require('mongoose')

const blogSchema= mongoose.Schema({
    title: {type: String, required: true},
    sub_description: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, default: ''},
    likes: {type: Number, default: 0},
    comment: [{type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})


const Blog= mongoose.model('Blog', blogSchema)

module.exports= Blog