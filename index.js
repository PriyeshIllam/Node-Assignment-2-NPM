require('dotenv').config();
const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');
const showsRouter = require('./routes/shows');

const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Routes
app.use('/movies', moviesRouter);
app.use('/shows', showsRouter);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
