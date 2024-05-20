// Importing mongoose library
const mongoose = require("mongoose");

// Defining the schema for the Dev model
const DevSchema = mongoose.Schema({
  // First name of the developer
  firstname: {
    type: String,
    required: true,
  },
  // Last name of the developer
  lastname: {
    type: String,
    required: true,
  },
  // Unique identifier for the developer
  id: {
    type: Number,
    required: true,
  },
  // Email address of the developer
  email: {
    type: String,
    required: true,
  },
});

// Creating the Dev model based on the schema
const Dev = mongoose.model("Dev", DevSchema);

// Exporting the Dev model for use in other parts of the application
module.exports = Dev;
