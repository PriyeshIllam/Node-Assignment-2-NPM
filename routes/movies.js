import express from "express";
import movies from "../data/movies.js";

const router = express.Router();

router.get("/", (req, res) => {
    if(movies){
        res.render("items", { 
            pageTitle: "Movies", 
            items: movies, 
            itemType: "movies" 
        });
    }
});

router.get("/:id", (req, res) => {
    const movie = movies.find(m => m.id == req.params.id);
    if (!movie) return res.status(404).send("Movie not found");
    res.render("item-detail", { 
        item: movie, 
        itemType: "movies" 
    });
});

export default router;


