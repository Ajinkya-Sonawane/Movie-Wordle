const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();

app.use(express.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//MongoDB Compass => mongodb://localhost:27017/bollywood_movies

mongoose.connect("mongodb+srv://advaitnene:Treasurepark1827@cluster0.tyltyll.mongodb.net/Bollywood_movies?retryWrites=true&w=majority",{});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(8000, () => {
    console.log("Listening on port 8000!");
})