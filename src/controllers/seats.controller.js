const express = require("express");

const Seats = require("../models/seats.model");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const seats = await Seats.create(req.body);

    return res.status(201).send(seats);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const seats = await Seats.find().lean().exec();

    return res.send({ seats });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
