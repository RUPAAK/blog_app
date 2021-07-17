const jwt= require('jsonwebtoken')

const generateToken= (id)=>{
    return jwt.sign({id}, process.env.JWT, {
        expiresIn: '30d'
    })
}

module.exports= generateToken
