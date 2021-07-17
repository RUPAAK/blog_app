const mongoose= require('mongoose')
const bcrypt= require('bcryptjs')

const userSchema= mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, required: true},
    password: {type: String, require: true},
    isAdmin: {type: Boolean, default: false, required: true}
}, {timestams: true})

userSchema.pre('save',  async function(next){
    if(this.isModified('password')){
        const salt= await bcrypt.genSalt(10)
        this.password= await bcrypt.hash(this.password, salt)
    }
    next()
})

userSchema.methods.matchPassword= async function(userPassword){
    return await bcrypt.compare(userPassword, this.password)
}

const User= mongoose.model('User', userSchema)

module.exports= User