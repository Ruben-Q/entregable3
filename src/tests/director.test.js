const request = require('supertest')
const app = require('../app')
const { update } = require('../controllers/actor.controllers')

let directorId

const director = {
    firstName: "Jose",
    lastName: " Pedraza",
    nacionality: "Colombia",
    image: "loren5",
    birthday: "1954-05-28",
}

const BASE_URL = '/api/v1/directors'
test("Post -> 'BASE_URL' should statusCode (201) and res.body.firstName === director.firstName", async()=> { 
    const res = await request(app)
    .post(BASE_URL)
    .send(director)

    directorId = res.body.id 

    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(director.firstName)
})

test("Get -> 'BASE_URL' should statusCode (200) and res.body[0].firstName === director.firstName", async()=> {
    const res = await request(app)
    .get(BASE_URL)
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
    expect(res.body[0].firstName).toBe(director.firstName)
})

test("Get -> 'BASE_URL/:id' sholud estatusCode (200) and res.body.firstName === director.firstName", async()=> {
    const res = await request(app)
    .get(`${BASE_URL}/${directorId}`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(director.firstName)
})

test("put -> 'BASE_URL/:id' should statusCode (200) and res.body.firstName === director.firstName", async()=> {
    const directorUpday = {

        firstName: "Nadia",
        lastName: "Gutierrez",
        nacionality: "España",
        image: "loren1",
        birthday: "2001-05-13"
    }

    const res = await request(app)
    .put(`${BASE_URL}/${directorId}`)
    .send(directorUpday)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(directorUpday.firstName)
})

test("Delete -> 'BASE_URL/:id' should statusCode (204) and res.body.firstName === director.firstName", async()=> {
    const res = await request(app)
    .delete(`${BASE_URL}/${directorId}`)

    expect(res.statusCode).toBe(204)
})

