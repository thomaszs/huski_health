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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({
    extended:true
})); 

app.post('/api/pets/1', (req, res) => {
<<<<<<< HEAD
    let data = req.body
   database.editPet(data)
    return res.json(data)
=======
    database.editPet(req.body);
>>>>>>> 3d48ca2200b47a02a94f5a5143b899b39f033e96
    //get the DAta from the POST
    //2. To save the data in the Database through Knex
    //3. use .then to send the response back 
})

app.post('/api/pets', (req, res) => {
    database.newPet(req.body.newData)
})

app.get('/api/login', (req, res) => {
   console.log("HIT")
//    if (database.getAccount(req.body.email, req.body.password)) {
//        console.log("LOGGED IN")
//    } else {
//        console.log("FAIL")
//    }
})

app.post('/api/pets', (req, res) => {
    console.log("GOTTEN PET", req.body)
//     database.getPet() 
 })

app.listen(PORT, () => {
 console.log("Example app listening on port " + PORT);
});



