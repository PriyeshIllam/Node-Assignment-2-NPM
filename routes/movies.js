const express = require('express');
const router = express.Router();
const movies = require('../data/movies');

router.get('/', (req, res) => {
    res.render('movies', { movies });
});

router.get('/:id', (req, res) => {
    const movie = movies.find(m => m.id == req.params.id);
    if (!movie) return res.status(404).send("Movie not found");
    res.render('movie-detail', { movie });
});

module.exports = router;
