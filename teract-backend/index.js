const express = require("express");

// Recognize dev environment
const environment = process.env.NODE_ENV || "production";

// Set up Express app
const app = express();

// Define routes
app.get("/", (req, res) => res.send("Hello World!"));

// Run app
const port = process.env.PORT || 80;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
