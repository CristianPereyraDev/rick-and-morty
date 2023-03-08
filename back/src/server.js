const http = require("http");
const fs = require("fs");
const characters = require("./utils/data");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("rickandmorty/character")) {
      const reqId = req.url.split("/")[3];
      console.log("id = ", reqId);
      //console.log(characters);
      const char = characters.find(
        (char) => char.id === Number.parseInt(reqId)
      );
      console.log(char);
      if (char) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(char));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("No existe un personaje con el id proporcionado!");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
    }
  })
  .listen(PORT, "localhost");
