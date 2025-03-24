import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// import movies from "./data/movies.js";
import shows from "./data/shows.js";
//import movies from "./data/movies.js";
console.log("Home route accessed"); // Debugging step

import moviesRouter from "./routes/movies.js"; // ✅ Import the movies router
import showsRouter from "./routes/shows.js"; // ✅ Import the movies router

const app = express();

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the views directory explicitly
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    const safeMovies = movies || [];
    const safeShows = shows || [];
    console.log("Safe Movies:", safeMovies); // Print safeMovies to the console
    res.render("home", { movies: safeMovies, shows: safeShows });
});

// Use the Movies Router
app.use("/movies", moviesRouter);

// Use the Shows Router
app.use("/shows", showsRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
