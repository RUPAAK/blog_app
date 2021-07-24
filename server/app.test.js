const app= require('./app')
const request= require('supertest')

it('should return array of object from allblogs', async()=>{
    const response= await request(app)
        .get('/api/blogs/allblogs')
    expect(response.body).toEqual(expect.arrayContaining([
        expect.objectContaining({
            title: expect.any(String),
            sub_description: expect.any(String),
            description: expect.any(String),
            image: expect.any(String),
            likes: expect.any(Number),
            comment: expect.any(Array),
            author: expect.any(String)
        })
    ]))
})
