// const mongoose= require('mongoose')
// const {MongoMemoryServer}= require('mongodb-memory-server')
// const request= require('supertest')
// const app= require('./app')

// let mongo;

// beforeAll(async()=>{
//     mongo =new MoongoMemoryServer()
//     const mongoUri= await mongo.getUri()
//     await mongoose.connect(mongoUri, {useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true})
//     .then(()=> console.log('MONGO-MEMORY-SERVER ESTABLISHED'))
// })
// beforeForEach(async()=>{
//     const collections= await mongoose.connection.db.collections()

//     for(let collection of collections){
//         await colleciton.deleteMany()
//     }
// })

// afterAll(async()=>{
//     await mongo.stop()
//     await mongoose.conneciton.close()
// })

jest.setTimeout(200000);
