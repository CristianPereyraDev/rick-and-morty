//const http = require("http");
//const fs = require("fs");
const express = require("express");
const router = require("./routes/");
const cors = require("cors");

const server = express();
const PORT = 3001;

// CORS middleware
server.use(cors());

// This middleware parses incoming requests with JSON payloads and is based on body-parser.
server.use(express.json());

// Router middleware
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const id = req.url.split("/").pop();

//     if (req.url.includes("onsearch")) {
//       getCharById(res, id);
//     }
//     if (req.url.includes("detail")) {
//       getCharDetail(res, id);
//     }
//   })
//   .listen(PORT, "localhost");
