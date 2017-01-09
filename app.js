var express = require ('express');
var app = express();
var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');
var petRouter = require ('./routes/petRouter');

app.use(bodyParser.json());

app.use('/pets', petRouter);

mongoose.connect('mongodb://localhost:27017/petDatabase');

app.listen ('3000', function(){
  console.log('listening on 3000');
});//end app listen

app.use(express.static('public'));
