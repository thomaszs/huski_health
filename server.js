"use strict";
require('dotenv').config();
const dogBreed = require('what-dog');
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const app = express();
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const database = require("./database")(knex);
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(fileUpload())
app.use('/public', express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/whatDog', (req, res) => {
    let dogUrl = req.body.dogUrl
    dogBreed(dogUrl).then(doggyData => {
        res.send({
            doggyData
        })
    })
})

app.post('/api/pets/:id', (req, res) => {
    database.editPet(req.body)
        .then(function (result) {
        })
})

app.post('/api/pets/:id/activity', (req, res) => {
    database.newHistory(req.body)
        .then(function (result) {
            return res.send(result)
        })
})



//GET a pet's activities based on petId
app.get('/api/pets/activities', (req, res) => {
    database.getPetActivities(req.query.id).then(function (result) {
        return res.send(result)
    })
})

app.get('/api/pets/:id/weights', (req, res) => {
    database.getPetWeight(req.params.id).then((weights) => {
            if (weights) {
                return res.json(weights);
            } else {
                return res.json({
                    error: 'No Weights found'
                });
            }
        })
        .catch(err => {
            console.log(err);
        })
})

app.get('/api/pets/:id/latestweights', (req, res) => {
    database.getLatestPetWeight(req.params.id).then((weight) => {
            if (weight) {
                return res.json(weight);
            } else {
                return res.json({
                    error: 'No Weights found'
                });
            }

        })
        .catch(err => {
            console.log(err);
        })
})

app.get('/api/pets/:id/feeding', (req, res) => {
    database.getPetFeeding(req.params.id).then(function (result){
            if (result) {
                return res.json(result);
            } else {
                return res.json({
                    error: 'No feedings found'
                });
            }
        })
        .catch(err => {
        })
})

app.get('/api/pets/:id', (req, res) => {
    database.getPets(req.params.id)
        .then(function (result) {
            res.send(result)
        })
})

app.post('/api/pet/', (req, res) => {
    database.getPet(req.body.id)
        .then(function (result) {
            res.send(result)
        })
})

app.post('/api/pet/new', (req, res) => {
    database.newPet(req.body)
        .then(function (result) {
            res.send(result)
        })
})

 app.post('/api/signup', async (req, res) => {
    let user = await database.verifySignup(req.body)
    if (!user.length) {
     let newUser = await database.insertAccount(req.body)
     res.send(newUser)
    } else {
        res.send('already found')
    }
 })

 app.post('/api/login', async (req, res) => {
    let user = await database.verifyLogin(req.body)
    if (user.length) {
        res.send(user)
    } else {
        res.send("no user found")
    }
 })

 app.get('/api/user/:id', async (req, res) => {
    let user = await database.getUser(req.params.id)
    if (user.length) {
        res.send(user)
    } else {
        res.send("no user found")
    }
 })

 app.post('/api/uploadimage', (req, res, next) => {
    let imageFile = req.files.file;
    imageFile.mv(`${__dirname}/public/image/${req.body.filename}.jpg`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
      let image = `public/image/${req.body.filename}.jpg`;
      database.insertImage(req.body.filename, req.body.petid, image)
      res.json({file: image})
    });
  })

  app.get('/api/images/:id', async (req, res, next) => {
    let images = await database.getImages(req.params.id)
    res.send(images)
  });

  app.post('/api/uploadpdf', (req, res, next) => {
    let pdfFile = req.files.file;
    pdfFile.mv(`${__dirname}/public/pdf/${req.body.filename}.pdf`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
      let pdf = `public/pdf/${req.body.filename}.pdf`
      database.insertFile(req.body.filename, req.body.petid, pdf)
      res.json({file: pdf})
    });
  })


  app.get('/api/pdf/:id', async (req, res, next) => {
      let files = await database.getFiles(req.params.id)
      res.send(files)
    });

    app.get('/api/record/:id', async (req, res, next) => {
        let file = await database.getFile(req.params.id)
        res.send(file)
      });


app.listen(PORT, () => {
    console.log("Huski Health is listening on port " + PORT);
});