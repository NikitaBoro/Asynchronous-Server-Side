// Importing necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

// Importing route modules
const costRoute = require("./routes/costs_route.js");
const reportRoutes = require("./routes/report_route.js");
const aboutRoutes = require("./routes/about_route.js");

// Creating an instance of Express
const app = express();

// Middleware setup
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(cors()); // For enabling CORS (Cross-Origin Resource Sharing)

// Routes setup
app.use("/addcost", costRoute); // For handling cost related requests
app.use("/report", reportRoutes); // For handling report related requests
app.use("/about", aboutRoutes); // For handling about related requests

// Connecting to MongoDB Atlas database
mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => {
    console.log("Connected to database!");
    // Starting the server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection to database failed!");
  });
