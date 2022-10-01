const express = require("express");
const app = express();

// Route Imports
const post = require("./routes/postRoute");

app.use("/api/v1", product);

module.exports = app