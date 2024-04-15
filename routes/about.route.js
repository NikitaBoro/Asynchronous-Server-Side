const express = require("express");
const router = express.Router();
const Dev = require("../models/devs.model.js");

router.get("/", async (req, res) => {
  try {
    const devs = await Dev.find({});
    res.status(200).json(devs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
