const route= require('express').Router()
const { addUser, userLogin } = require('../controllers/userControllers')


route.post('/register', addUser)
route.post('/login', userLogin)

module.exports= route