var http = require('http');
var app = require('./config/express');
var database = require('./config/database');
var express = require('express');
var router = express.Router();
var port = process.env.PORT || 8080;
var uristring = process.env.MONGODB_URI || 'mongodb://localhost/madeiras-mg';
database(uristring);

http.createServer(app)
  .listen(port, function() {
    console.log('Servidor iniciado com sucesso');
  });

router.get('/', function(req, res){
  res.json({ message: 'Ops! Seja Bem-Vindo a nossa API'});
});

app.use('/api', router);