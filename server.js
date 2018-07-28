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

app.post('/api/pets/1', async (req, res) => {
    database.editPet(req.body.newPetName)
    //get the DAta from the POST
    //2. To save the data in the Database through Knex
    //3. use .then to send the response back 

  //  res.send({result: "It works"});
//    if (database.getAccount(req.body.email, req.body.password)) {
//        console.log("LOGGED IN")
//    } else {
//        console.log("FAIL")
//    }
})

app.post('/api/pets', async (req, res) => {
    // database.newPet(req.body.n
})

app.get('/api/login', (req, res) => {
   console.log("HIT")
//    if (database.getAccount(req.body.email, req.body.password)) {
//        console.log("LOGGED IN")
//    } else {
//        console.log("FAIL")
//    }
})

// app.post('/pet', (req, res) => {
//     console.log("GOTTEN PET")
//     database.getPet() 
//  })

app.listen(PORT, () => {
 console.log("Example app listening on port " + PORT);
});



