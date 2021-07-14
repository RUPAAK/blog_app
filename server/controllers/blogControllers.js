const asyncHandler= require('express-async-handler')
const Blog= require('../models/blogSchema')


const newPost= asyncHandler(async(req, res)=>{
    const author= req.params.id
    console.log(author)
    const image=`https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80`;
    const {title, sub_description,description}= req.body;
    try {
        if(!title || !sub_description || !description){
            res.status(400)
            throw new Error('Empty field not valid')
        }
        const newBlog= await new Blog({title, sub_description, description, author, image}).save();
        if(!newBlog){
            res.status(400)
            throw new Error('Failed to Save')
        }
        res.status(200).json(newBlog)

    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

const allBLogs= asyncHandler(async(req, res)=>{
    try {
        const blogs= await Blog.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports= {newPost, allBLogs}