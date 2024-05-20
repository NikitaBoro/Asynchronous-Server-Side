const express = require("express");
const router = express.Router(); // Creating an instance of Express Router
const Cost = require("../models/costs_model.js"); // Importing the Cost model
const User = require("../models/users_model.js"); // Importing the User model

// Endpoint to handle GET requests for fetching categorized costs for a specific user, year, and month
router.get("/", async (req, res) => {
  const { user_id, year, month } = req.query; // Extracting query parameters
  
  // Check if all required parameters are entered
  if(!user_id || !year || !month){
    return res.status(400).json({ error: "Missing parameters" });
  }
  try {
    // Check if user exists
    const user = await User.findOne({ id: user_id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    //Check if valid year entered
    if (year < 0) {
      return res.status(400).json({ error: "Invalid year entered" });
    }

    //Check if valid month entered
    if (month < 1 || month > 12) {
      return res
        .status(400)
        .json({ error: "Invalid month entered" });
    }

    // Finding costs for the specified user, year, and month
    const costs = await Cost.find({ user_id, year, month });
    const categories = [
      "food",
      "health",
      "housing",
      "sport",
      "education",
      "transportation",
      "other",
    ];
    const report = {};

    // Initialize report object with empty arrays for each category
    categories.forEach((category) => {
      report[category] = [];
    });

    // Categorize costs directly into the report object
    costs.forEach((cost) => {
      const { category, day, description, sum } = cost;
      report[category].push({ day, description, sum });
    });

    // Sending the categorized report as JSON response
    res.json(report);
  } catch (err) {
    // Handling errors and sending error response with status code 500 (Internal Server Error)
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; // Exporting the router module for use in other files
