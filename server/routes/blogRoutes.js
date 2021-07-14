const route= require('express').Router()
const { newPost, allBLogs } = require('../controllers/blogControllers')


route.post('/newblog/:id', newPost)
route.get('/blogs', allBLogs)

module.exports= route