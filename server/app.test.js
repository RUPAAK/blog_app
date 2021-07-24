const app= require('./app')
const request= require('supertest')

it('should return array of object-allblogs from database', async()=>{
    const response= await request(app)
        .get('/api/blogs/allblogs')
    expect(response.body).toEqual(expect.arrayContaining([
        expect.objectContaining({
            _id: expect.any(String),
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

it('should return object- details of blog', async()=>{
    const response= await request(app)
        .get('/api/blogs/60f91ba34ae30a4230d6c909')
        .expect(200)
    expect(response.body.blog_details).toBeDefined()
})


//user actions test

it('should return error if name is empty', async()=>{
    const response= await request(app)
        .post('/api/users/register')
        .send({
            email: "rupak@gmail.com",
            password: "kathmandu"
        })
        .expect(400)
        
    expect(response).toBeDefined()
})

it('should return error if email is empty', async()=>{
    const response= await request(app)
        .post('/api/users/register')
        .send({
            name: "Rupak",
            password: "kathmandu"
        })
        .expect(400)
            
    expect(response).toBeDefined()
})

it('should return error if password is empty', async()=>{
    const response= await request(app)
        .post('/api/users/register')
        .send({
            name: "Rupak",
            email: "rupak@gmail.com"
        })
        .expect(400)
            
    expect(response).toBeDefined()
})
