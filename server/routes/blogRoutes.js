const route= require('express').Router()
const { newPost, allBLogs, blogDetail,likeBlog } = require('../controllers/blogControllers')


route.post('/newblog/:id', newPost)
route.get('/blogs', allBLogs)
route.get('/:id', blogDetail)
route.put('/:id/like', likeBlog)

module.exports= route