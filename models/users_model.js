// Importing mongoose library
const mongoose = require("mongoose");

// Defining the schema for the User model
const UserSchema = mongoose.Schema({
  // Unique identifier for the user
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  // First name of the user
  first_name: {
    type: String,
    required: true,
  },
  // Last name of the user
  last_name: {
    type: String,
    required: true,
  },
  // Birthday of the user
  birthday: {
    type: Date,
    required: true,
  },
});

// Creating the User model based on the schema
const User = mongoose.model("User", UserSchema);

// Exporting the User model for use in other parts of the application
module.exports = User;
