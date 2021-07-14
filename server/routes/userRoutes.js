const route= require('express').Router()
const { addUser } = require('../controllers/userControllers')


route.post('/register', addUser)

module.exports= route