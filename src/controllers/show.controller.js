const express = require("express");

const Shows = require("../models/shows.model");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const show = await Shows.create(req.body);

    return res.status(201).send(show);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const show = await Shows.find().populate("movie").populate("screen").lean().exec();

    return res.send({ show });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
