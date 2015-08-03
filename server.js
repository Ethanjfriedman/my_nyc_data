var express = require('express'),
    server = express();

server.use(express.static('./public'));

server.use(function(req, res){
  res.render("interactions")
});

server.listen(3000, function(){
    console.log("Server UP AND RUNNING!")
});