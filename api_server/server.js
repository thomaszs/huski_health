"use strict";

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const app = express();
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const database = require("./database")(knex);
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
  }));


app.post('/api/login', (req, res) => {
    return console.log(req.body)
//    if (database.getAccount(req.body.email, req.body.password)) {
//        console.log("LOGGED IN")
//    } else {
//        console.log("FAIL")
//    }
})

// app.get('/api/login', (req, res) => {
//     return console.log(req.body)
//    if (database.getAccount(req.body.email, req.body.password)) {
//        console.log("LOGGED IN")
//    } else {
//        console.log("FAIL")
//    }
// })

app.post('/api/pet/:id', (req, res) => {
    database.getPet(req.body.id) 
 })

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

