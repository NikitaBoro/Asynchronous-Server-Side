const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const costRoute = require("./routes/cost.route.js");
const reportRoutes = require("./routes/report.routes.js");
const aboutRoutes = require("./routes/about.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/addcost", costRoute);
app.use("/report", reportRoutes);
app.use("/about", aboutRoutes);

mongoose
  .connect(
    "mongodb+srv://nikitaboro03:zvQ2zMmTdJmgA7Py@backenddb.ipskpzg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection to database failed!");
  });
