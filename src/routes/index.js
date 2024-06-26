const express = require('express');
const routerActor = require('./actor.router');
const routerDirector = require('./director.router');
const routerGenre = require('./genre.router');
const routerMovies = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/actors', routerActor)
router.use('/directors', routerDirector)
router.use('/genres', routerGenre)
router.use('/movies', routerMovies)

module.exports = router;