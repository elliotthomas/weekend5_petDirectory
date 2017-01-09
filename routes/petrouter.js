var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pet = require('../models/pet');

//------get pets from database---------//
router.get('/', function(req, res){
  Pet.find({}, function(err, petResults){
    if (err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('pets -->', petResults);
      res.send(petResults);
    }
  }); //end Pet.find
}); //end router.get

//-------send assignments to the database---------//
router.post('/', function(req, res){
  console.log('in assignment post');
  console.log('req.body', req.body);
  var sentData = req.body;

  var newPet = new Pet ({
    name: sentData.name,
    animal: sentData.animal,
    age: sentData.age,
    image: sentData.image
  });//end newPet

  newPet.save(function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('new pet created');
      res.sendStatus(200);
    }
  }); //end newPet.save
}); //end router.post

module.exports = router;
