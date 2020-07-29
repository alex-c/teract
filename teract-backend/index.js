const express = require("express");
const r = require("rethinkdb");

// Recognize dev environment
const environment = process.env.NODE_ENV || "production";

// Set up Express app
const app = express();

// Define routes
app.get("/", function (req, res) {
  r.connect(
    {
      host: "localhost",
      port: 28015,
      db: "test",
      user: "admin",
      password: "",
    },
    function (error, connection) {
      if (error) throw error;
      r.table("test")
        .insert({
          name: "alex",
        })
        .run(connection, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
    }
  );
});

// Run app
const port = process.env.PORT || 80;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
