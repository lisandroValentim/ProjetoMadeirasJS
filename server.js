var http = require('http');
var app = require('./config/express');
var database = require('./config/database');
var express = require('express');
var router = express.Router();
database('mongodb://localhost/madeiras-mg');

http.createServer(app)
  .listen(8080, function() {
    console.log('Servidor iniciado com sucesso');
  });

router.get('/', function(req, res){
  res.json({ message: 'Ops! Seja Bem-Vindo a nossa API'});
});

app.use('/api', router);