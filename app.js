const express = require("express");
const app = express();
const http = require("http");
var mysql = require("mysql");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var usersRouter = require("./userRoute");

app.get("/", (request, response) => {
  return response.send("Todoapp");
});

app.use("/app", jsonParser, usersRouter);

const server = http.Server(app);

server.listen(5000, () => {
  console.log("Server started on port 5000");
});
