//init da napravis json fajl za depedencije
//npm install cors body-parser express nodemon mongoose
// import express from 'express';
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

var port = process.env.PORT || 3000;

//connect to mongodb
const db = 'mongodb+srv://dusanilic1999:xWY4Op0rOPhwmNs1@cluster0.f9ue6ee.mongodb.net/';
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result: any) => {
    console.log(port);
    app.listen(port);
    console.log('Running')
  })
  .catch((err: any) => console.log(err));

app.use(bodyParser.json());
app.use(cors());

var user = require("./api/user");
app.use("/api/user", user);
var washer = require("./api/washer");
app.use("/api/washer", washer);

app.use(bodyParser.json());
app.use(cors());