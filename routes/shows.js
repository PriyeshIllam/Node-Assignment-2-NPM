const express = require('express');
const router = express.Router();
const shows = require('../data/shows');

router.get('/', (req, res) => {
    res.render('shows', { shows });
});

router.get('/:id', (req, res) => {
    const show = shows.find(s => s.id == req.params.id);
    if (!show) return res.status(404).send("Show not found");
    res.render('show-detail', { show });
});

module.exports = router;
