const express= require('express')
const mongoose= require('mongoose');
const dotenv= require('dotenv')
const cors= require('cors')

const app= express()

dotenv.config()

const {notFound, errorHandler}= require('./middlewares/errorHandlers')
const blogRoutes= require('./routes/blogRoutes')
const userRoutes= require('./routes/userRoutes')


app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRoutes)
app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGO, {
    useUnifiedTopology: true, useNewUrlParser: true
}).then(()=>console.log(`CONNECITON TO DATABASE`))
.catch((e)=>{
    console.error(`Error-${e.message}`)
    process.exit(1)
})
app.use(notFound)
app.use(errorHandler)


app.listen(process.env.PORT || 5000, ()=> console.log('SERVER UP AND RUNNING'))

module.exports= app