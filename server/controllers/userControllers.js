const asyncHandler = require('express-async-handler')
const User = require('../models/userSchema')
const generateToken= require('../middlewares/generateToken')

const addUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
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
})

const userLogin= asyncHandler(async(req, res)=>{
    const {email, password}= req.body
    try {
        if(!email || !password){
            res.status(400)
            throw new Error("Empty field not valid")
        }
        const existuser= await User.findOne({email})
        if(existuser && (await existuser.matchPassword(password))){
            res.status(200).json({
                id: existuser._id,
                usernmae: existuser.username,
                isAdmin: existuser.isAdmin,
                token: generateToken(existuser._id)
            })
        }else{
            res.status(404)
            throw new Error('Invalid Credientials')
        }
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports = { addUser, userLogin }