const express = require('express');
const routerActor = require('./actor.router');
const routerDirector = require('./director.router');
const routerGenre = require('./genre.router');
const routerMovies = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/actor', routerActor)
router.use('/director', routerDirector)
router.use('/genre', routerGenre)
router.use('/movie', routerMovies)

module.exports = router;