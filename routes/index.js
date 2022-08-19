var express = require('express');
var router = express.Router();
var moment = require('moment');
require('dotenv').config();
let pw = process.env.password;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lee:"+pw +"@cluster0.guc9f.mongodb.net/?retryWrites=true&w=majority";
/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Xi-Day Counter' });
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("misc").collection("bday");
  // perform actions on the collection object
  client.close();
});
});

router.post('/', function(req, res, next) {
  



})

module.exports = router;
