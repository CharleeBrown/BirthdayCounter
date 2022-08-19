var express = require('express');
var router = express.Router();
var moment = require('moment');
require('dotenv').config();
let pw = process.env.password;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lee:"+pw +"@cluster0.guc9f.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const db = client.db("misc");
const coll = db.collection("bday");


function connectToDb(name, message){

  client.connect(err => {
    coll.insertOne({name:"test"});
  });

  client.close();
  }
/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Xi-Day Counter' });
  connectToDb();
});

router.post('/', function(req, res, next) {
  



})


module.exports = router;
