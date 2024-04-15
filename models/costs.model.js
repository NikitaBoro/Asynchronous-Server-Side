const mongoose = require("mongoose");

const CostSchema = mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  day: {
    type: Number,
    required: true,
  },
  id: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: true,
    default: function () {
      return this._id;
    },
  },
  description: {
    type: String,
    required: true,
  },
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
  sum: {
    type: Number,
    required: true,
  },
});

const Cost = mongoose.model("Cost", CostSchema);

module.exports = Cost;
