var express = require('express'),
    server = express(),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID,
    url = 'mongodb://localhost:27017/menu',
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    port = 3000;
    mongoose.connect('mongodb://localhost/menu');
    var db = mongoose.connection;
    db.on('open', function(){
    server.listen(port);
    server.db = db;
    console.log('Ready For Action');
    });


 /*<><><><><><><>MIDDLEWARE<><><><><><><><>*/

// in controller/posts.js we stash all posts routes


server.use(express.static('./public'));
server.use(methodOverride('_method'));

server.set('views', './views');
server.set('view engine', 'ejs');

server.use(bodyParser.urlencoded({extended:true}));

var userController = require('./controllers/userController.js');
server.use('/user', userController);

var visualizationController = require('./controllers/visualizationController.js');
server.use('/visualization', visualizationController);



server.get('/',function(req,res){
  res.render('homepage');
});

