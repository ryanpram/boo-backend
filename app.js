"use strict";

const { error } = require("console");
const express = require("express");
const dbHandler = require("./db/conn");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// set the view engine to ejs
app.set("view engine", "ejs");

// set body parser
app.use(bodyParser.json());

// routes
app.use("/profiles", require("./routes/profile")());
app.use("/comments", require("./routes/comment")());

dbHandler
  .connect()
  .then(() => {
    try {
      // start server
      app.listen(port, () => {
        console.log("Express started. Listening on %s", port);
      });
    } catch (error) {
      console.log("Error connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid Database Connection!");
  });
