const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const server = express();

server.use(cors());
server.use(express.json({ limit: "10mb" }));

const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//Servidores estáticos (uno para la app React)
const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));
//otro para los css de mi tarjeta
const serverStaticPath2 = "./static";
server.use(express.static(serverStaticPath2));

//Motor de plantillas
server.set("view engine", "ejs");

//Base de datos
const db = new Database("./src/data/dataBase.db", { verbose: console.log });

server.get("/cardgenerator/:id", (req, res) => {
  const query = db.prepare("SELECT * from card WHERE id = ?");
  const data = query.get(req.params.id);
  res.send(data);
});

server.post("/cardgenerator", (req, res) => {
  const response = {};

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
    const query = db.prepare(
      `INSERT INTO card(palette, name, job, image, email, phone, linkedin, github) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`
    );
    const result = query.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.image,
      req.body.email,
      req.body.phone,
      req.body.linkedin,
      req.body.github
    );
    response.sucess = true;
    if (req.hostname === "localhost") {
      response.cardURL = `http://localhost:${serverPort}/cardgenerator/${result.lastInsertRowid}`;
      console.log(response.cardURL);
    } else {
      response.cardURL = `https://hime-awesome-profile-cards.herokuapp.com/#/${result.lastInsertRowid}`;
      //result.lastInsertRowid;
    }
  }
  res.json({ response });
});

// server.get("*", (req, res) => {
//   const notFoundFileRelativePath = "../web/404-not-found.html";
//   const notFoundFileAbsolutePath = path.join(
//     __dirname,
//     notFoundFileRelativePath
//   );
//   res.status(404).sendFile(notFoundFileAbsolutePath);
// });
