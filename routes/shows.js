import express from "express";
import shows from "../data/shows.js";

const router = express.Router();

router.get("/", (req, res) => {
    if(shows){
        res.render("items", { 
            pageTitle: "Shows", 
            items: shows, 
            itemType: "shows" 
        });
    }
});

router.get("/:id", (req, res) => {
    const movie = shows.find(m => m.id == req.params.id);
    if (!movie) return res.status(404).send("Movie not found");

    res.render("item-detail", { 
        item: movie, 
        itemType: "shows" 
    });
});

export default router;
