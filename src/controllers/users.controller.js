const express = require("express");

const Users = require("../models/users.model");

const router = express.Router();

//--------------------------User CRUD ------------------------------

router.post("", async (req, res) => {
  try {
    const user = await Users.create(req.body);

    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const user = await Users.find().lean().exec();

    return res.send({ user });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Users.findById(req.params.id).lean().exec();

    return res.send(student);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const Users = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(student);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
