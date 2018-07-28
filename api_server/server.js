"use strict";

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const app = express();
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);
const database = require("../database")(knex);

app.use('/api')

app.get('/login', (req, res) => {
   if (database.getAccount(req.body.email, req.body.password)) {
       console.log("LOGGED IN")
   } else {
       console.log("FAIL")
   }
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

