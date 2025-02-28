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

// shows Route - Pass the data
app.get("/shows", (req, res) => {
    res.render("shows", { shows }); // ✅ Pass 'shows' to EJS
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
