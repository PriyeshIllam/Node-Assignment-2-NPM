const express = require("express");
const path = require("path");

const movies = require("./data/movies");
const shows = require("./data/shows");

const app = express();

// Set the views directory explicitly
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    res.render("home", { movies, shows });
});

// Movies Route - Pass the data
app.get("/movies", (req, res) => {
    res.render("movies", { movies }); // ✅ Pass 'movies' to EJS
});

// ✅ Add Route for Individual Movie Pages
app.get("/movies/:id", (req, res) => {
    const movie = movies.find(m => m.id == req.params.id);
    if (!movie) return res.status(404).send("Movie not found");
    res.render("movie-detail", { movie });
});

// shows Route - Pass the data
app.get("/shows", (req, res) => {
    res.render("shows", { shows }); // ✅ Pass 'shows' to EJS
});

// ✅ Add Route for Individual Movie Pages
app.get("/shows/:id", (req, res) => {
    const show = shows.find(m => m.id == req.params.id);
    if (!show) return res.status(404).send("Show not found");
    res.render("show-detail", { show });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
