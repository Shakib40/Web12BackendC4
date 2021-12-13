const express = require("express");

const Movies = require("../models/movies.model");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const movie = await Movies.create(req.body);

    return res.status(201).send(movie);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const movie = await Movies.find().lean().exec();

    return res.send({ movie });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
