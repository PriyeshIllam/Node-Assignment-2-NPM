const express = require('express');
const router = express.Router();
const movies = require('../data/movies'); // Ensure movies.js exports an array

// Route to display all movies
router.get('/', (req, res) => {
    res.render('movies', { movies }); // Render movies.ejs template
});

// Route to display a single movie detail page
router.get('/:id', (req, res) => {
    const movie = movies.find(m => m.id == req.params.id);
    if (!movie) return res.status(404).send("Movie not found");
    res.render('movie-detail', { movie }); // Render movie-detail.ejs template
});

module.exports = router;
