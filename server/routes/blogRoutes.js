const route= require('express').Router()
const { newPost, allBLogs, blogDetail } = require('../controllers/blogControllers')


route.post('/newblog/:id', newPost)
route.get('/blogs', allBLogs)
route.get('/:id', blogDetail)

module.exports= route