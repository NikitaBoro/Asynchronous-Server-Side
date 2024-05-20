// Importing necessary modules
const express = require("express");
const Cost = require("../models/costs_model.js"); // Importing the Cost model
const User = require("../models/users_model.js"); // Importing the User model
const router = express.Router(); // Creating an instance of Express Router

// Endpoint to handle POST requests for adding a new cost item
router.post("/", async (req, res) => {

  // Extracting request body parameters
  const user_id = req.body.user_id;
  const description = req.body.description;
  const category = req.body.category.toLowerCase();
  const sum = req.body.sum;
  let year = req.body.year;
  let month = req.body.month;
  let day = req.body.day;

  try {
    
    //Check if user_id is entered
    if(!user_id){
      return res.status(400).json({ error: 'Missing user_id' });
    };

    // Check if user exists
    const user = await User.findOne({ id: user_id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    //Check if valid year entered, if year not entered then it will be defaulted to current year
    if (!year) {
      const date = new Date();
      year = date.getFullYear();
    } else if (year < 0) {
      return res.status(400).json({ error: "Invalid year" });
    }

    //Check if valid month entered, if month not entered then it will be defaulted to current month
    if (!month) {
      const date = new Date();
      month = date.getMonth() + 1;
    } else if (month < 1 || month > 12) {
      return res.status(400).json({ error: "Invalid month" });
    }

    //If day not entered it will be defaulted to current day
    if (!day) {
      const date = new Date();
      day = date.getDate();
    }

    //Check if the day is entered is valid
    if (!isDateValid(month, day, year)) {
      return res.status(400).json({ error: "Invalid day" });
    }

    //Check if description is entered
    if (!description) {
      return res.status(400).json({ error: "Missing description" });
    }

    //Check if valid category entered
    if (
      ![
        "food",
        "health",
        "housing",
        "sport",
        "education",
        "transportation",
        "other",
      ].includes(category)
    ) {
      return res
        .status(400)
        .json({ error: "Invalid category entered or missing" });
    }

    //Check if sum is valid
    if (!sum || sum < 0) {
      return res.status(400).json({ error: "Invalid sum or missing" });
    }

    // Create new cost item
    const newCost = new Cost({
      user_id,
      year,
      month,
      day,
      description,
      category,
      sum,
    });
    await newCost.save(); // Saving the new cost item to the database

    // Sending success response with status code 201 (Created)
    res.status(201).json({ message: "Cost item added successfully" });
  } catch (err) {
    // Handling errors and sending error response with status code 500 (Internal Server Error)
    res.status(500).json({ error: err.message });
  }
});

// Function to check if entered date is valid. For example, if we entered month=2 and day=30, then it's invalid.
function isDateValid(month, day, year) {
  // When we pass 0 in the day parameter, we get the last day of a specific month
  const lastDayOfMonth = new Date(year, month, 0);

  // With getDate() we get the day. For example, if the date is 28/02/2024, we get 28
  const daysInMonth = lastDayOfMonth.getDate();

  // Check if the provided day falls within the valid range for the given month and year
  if (day > 0 && day <= daysInMonth) {
    return true;
  } else return false;
}

module.exports = router; // Exporting the router module for use in other files
