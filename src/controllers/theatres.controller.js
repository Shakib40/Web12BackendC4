const express = require("express");

const Theatres = require("../models/theatres.model");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const theatres = await Theatres.create(req.body);

    return res.status(201).send( theatres );
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const theatres = await Theatres.find().lean().exec();

    return res.send({ theatres });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
