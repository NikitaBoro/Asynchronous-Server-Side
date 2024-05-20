// Importing mongoose library
const mongoose = require("mongoose");

// Defining the schema for the Cost model
const CostSchema = mongoose.Schema({
  // User ID associated with the cost entry
  user_id: {
    type: Number,
    required: true,
  },
  // Year of the cost entry
  year: {
    type: Number,
    required: true,
  },
  // Month of the cost entry, restricted to values 1 to 12
  month: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  // Day of the cost entry
  day: {
    type: Number,
    required: true,
  },
  // Unique identifier for the cost entry, automatically generated
  id: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: true,
    default: function () {
      return this._id;
    },
  },
  // Description of the cost entry
  description: {
    type: String,
    required: true,
  },
  // Category of the cost entry, must be one of the specified values
  category: {
    type: String,
    lowercase: true,
    required: true,
    enum: [
      "food",
      "health",
      "housing",
      "sport",
      "education",
      "transportation",
      "other",
    ],
  },
  // Sum or amount associated with the cost entry
  sum: {
    type: Number,
    required: true,
  },
});

// Creating the Cost model based on the schema
const Cost = mongoose.model("Cost", CostSchema);

// Exporting the Cost model for use in other parts of the application
module.exports = Cost;
