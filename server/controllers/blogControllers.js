const asyncHandler= require('express-async-handler')
const Blog= require('../models/blogSchema')
const Comment= require('../models/commentSchema')


const newPost= asyncHandler(async(req, res)=>{
    const author= req.params.id
    const comment= []
    const image=`https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80`;
    const {title, sub_description,description}= req.body;
    try {
        if(!title || !sub_description || !description){
            res.status(400)
            throw new Error('Empty field not valid')
        }
        const newBlog= await new Blog({title, sub_description, description, author, image, comment}).save();
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

const blogDetail= asyncHandler(async(req, res)=>{
    try {
        const blog= await Blog.findById(req.params.id).populate("author", "username")
        let comments= []
        for(let i=0; i<blog.comment.length; i++){
            const comment= await Comment.findById(blog.comment[i]).populate('userId', "username");
            comments.push(comment)
        }
        res.status(200).json({
            blog_details: blog,
            comments
        })
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

const likeBlog= asyncHandler(async(req, res)=>{
    try {
        const blog= await Blog.findById(req.params.id)
        if(!blog){
            res.status(400)
            throw new Error('Blog not found')
        }
        blog.likes= blog.likes+1;
        blog.save()
        res.status(200).json(blog)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

const addComment= asyncHandler(async(req, res)=>{
    const {comment_text, userId}= req.body
    try {
        const newComment= await Comment({comment_text, userId}).save()
        const blog= await Blog.findById(req.params.id);
        blog.comment.push(newComment._id);
        blog.save()
        res.status(200).json(blog)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports= {newPost, allBLogs, blogDetail, likeBlog, addComment}