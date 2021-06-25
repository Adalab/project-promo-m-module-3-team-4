const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.json({ limit: "10mb" }));

const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));
server.set("view engine", "ejs");

const db = new Database("./src/data/dataBase.db", { verbose: console.log });

server.get("/card/:id", (req, res) => {
  const query = db.prepare("SELECT * FROM card");
  const data = query.all();
  res.send(data);
});

server.get("*", (req, res) => {
  const notFoundFileRelativePath = "../web/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});

server.post("/cardgenerator/", (req, res) => {
  const response = {};
  console.log(req.body);
  if (req.body.name === undefined) {
    response.sucess = false;
    response.error = "Missing name parameter";
  } else if (req.body.job === undefined) {
    response.sucess = false;
    response.error = "Missing job parameter";
  } else if (req.body.image === undefined) {
    response.sucess = false;
    response.error = "Missing image parameter";
  } else if (req.body.email === undefined) {
    response.sucess = false;
    response.error = "Missing email parameter";
  } else if (req.body.linkedin === undefined) {
    response.sucess = false;
    response.error = "Missing linkedin parameter";
  } else if (req.body.github === undefined) {
    response.sucess = false;
    response.error = "Missing github parameter";
  } else {
    response.sucess = true;
    response.cardURL = "mi_url_com";
  }
});
