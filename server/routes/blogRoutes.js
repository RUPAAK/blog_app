const route= require('express').Router()
const { newPost, allBLogs, blogDetail,likeBlog, addComment } = require('../controllers/blogControllers')


route.post('/newblog/:id', newPost)
route.get('/allblogs', allBLogs)
route.get('/:id', blogDetail)
route.put('/:id/like', likeBlog)
route.post('/:id/comment', addComment)

module.exports= route