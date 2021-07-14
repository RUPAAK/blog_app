const asyncHandler = require('express-async-handler')
const User = require('../models/userSchema')

const addUser = asyncHandler(async (req, res) => {
    const { username, email, password, isAdmin } = req.body
    try {
        if (!username || !email || !password) {
            res.status(400)
            throw new Error('Empty field not valid')
        }
        const existuser = await User.findOne({ email })
        if (!existuser) {
            const newUser = await new User({ username, email, password, isAdmin }).save()
            if (!newUser) {
                res.status(400) 
                throw new Error('Failed to register')
            }
            res.status(200).json(newUser)

        } else {
            res.status(400)
            throw new Error("User already exists")
        }
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports = { addUser }