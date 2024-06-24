const request = require("supertest");
const app = require("../app")

let actorId

const actor = {
    firstName: "Ruben",
    lastName: "Ant",
    nacionality: "Arg",
    image: "loren",
    birthday: "1999-02-12"
}

const BASE_URL = '/api/v1/actors'

test("POST -> 'BASE_URL' should status code (201) and res.body.firstName === actor.firstName", async()=> {
    const res = await request(app)
    .post(BASE_URL)
    .send(actor)

    actorId = res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(actor.firstName)
})

test("GET -> 'BASE_URL' should status code (200) and res.body[0].firstName === actor.firstName", async()=> {
    const res = await request(app)
    .get(BASE_URL)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
    expect(res.body[0].firstName).toBe(actor.firstName)
})

test("GET -> 'BASE_URL/:id' should statusCode (200), and res.body.firstName === actor.firstName", async()=> {
    const res = await request(app)
    .get(`${BASE_URL}/${actorId}`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(actor.firstName)
})

test("PUT -> 'BASE_URL/:id', should return status code (200), and res.body.firstName === actorUpdate.firstName", async () => {
    const actorUpdate = {

    firstName: "Mariela",
    lastName: "Calv",
    nacionality: "Argentina",
    image: "lorem10",
    birthday: "1940-02-25"
    }
    const res = await request(app)
    .put(`${BASE_URL}/${actorId}`)
    .send(actorUpdate)

    expect(res.status).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(actorUpdate.firstName)
})

test("DELETE -> 'BASE_URL/:id', should return status code (204)", async () => {
    const res = await request(app)
    .delete(`${BASE_URL}/${actorId}`)

    expect(res.status).toBe(204)
})
