const request = require("supertest")
const app = require("../app")

let genreId

const genre = {
    name: "Marcelo"
}

const BASE_URL = '/api/v1/genres'
test("POST -> 'BASE_URL' should return statusCode (201) and res.body.name === genre.name", async()=> {
    const res = await request(app)
    .post(BASE_URL)
    .send(genre)

    genreId = res.body.id

    expect(res.statusCode).toBe(201)    
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(genre.name)
})

test("GET -> 'BASE_URL' should return statusCode (200) and res.body.name === genre.name", async()=> {
    const res = await request(app)
    .get(BASE_URL)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body[0].name).toBe(genre.name)
})

test("GET -> 'BASE_URL/:id' should return statusCode (200) and res.body.name === genre.name", async()=> {
    const res = await request(app)
    .get(`${BASE_URL}/${genreId}`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(genre.name)
})

test("PUT -> 'BASE_URL/:id' should return statusCode (200) and res.body.name === genre.name", async()=> {

    const genreUpdate = {
        name: "Meli"
    }

    const res = await request(app)
    .put(`${BASE_URL}/${genreId}`)
    .send(genreUpdate)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(genreUpdate.name)
})

test("DELETE -> 'BASE_URL/:id', ststus (200) and res.body.name === genre.name", async()=> {
    const res = await request(app)
    .delete(`${BASE_URL}/${genreId}`)

    expect(res.statusCode).toBe(204)
})