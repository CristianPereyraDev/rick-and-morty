const express = require("express");
const router = require("./routes/");
const cors = require("cors");

const app = express();

// CORS middleware
app.use(cors());

// This middleware parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// Router middleware
app.use("/rickandmorty", router);

module.exports = app;
