const app= require('./app')
const request= require('supertest')

it('should return array of allblogs', async()=>{
    await request(app)
        .get('/api/blogs/allblogs')
        .expect(200)
})