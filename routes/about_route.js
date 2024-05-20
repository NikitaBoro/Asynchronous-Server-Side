// Importing necessary modules
const express = require("express");
const router = express.Router(); // Creating an instance of Express Router
const Dev = require("../models/devs_model.js"); // Importing the Dev model

// Defining a GET endpoint for fetching all developers
router.get("/", async (req, res) => {
  try {
    // Finding all developers in the database
    const devs = await Dev.find({}, { _id: false });
    // Sending the developers as JSON response with status code 200 (OK)
    res.status(200).json(devs);
  } catch (err) {
    // Handling errors and sending error response with status code 500 (Internal Server Error)
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; // Exporting the router module for use in other files
