const { getAll, create, getOne, remove, update, setActor, setDirector, setGenre } = require('../controllers/movie.controllers');
const express = require('express');

const routerMovies = express.Router();

routerMovies.route('/')
    .get(getAll)
    .post(create);

routerMovies.route('/:id/actors')  
.post(setActor)

routerMovies.route('/:id/directors')
.post(setDirector)

routerMovies.route('/:id/genres')
.post(setGenre)

routerMovies.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerMovies;