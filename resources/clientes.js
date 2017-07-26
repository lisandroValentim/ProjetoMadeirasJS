var mongoose = require('mongoose');

var clientesModel = mongoose.model('clientes');
var parseParams = require('../utils/parse-params');

module.exports = function (app) {
  app.get('/api/clientes', function(req, resp) {
    var fields = {
      score: { $meta: 'textScore'},
      _id: 1,
      nome: 1,
      cpf_cnpj: 1,
      rg_inscr_est: 1,
      email: 1,
      endereco: 1,
      cidade: 1,
      telefone: 1
    };
    clientesModel.find(parseParams(req.query.filter), fields, {sort: {score: {$meta: 'textScore'}, nome: 1 } })
      .then(function(dados){
        resp.json(dados);
      }, function(erro){
        resp.status(500).json(erro);
      })
  });


  
  app.post('/api/clientes', function(req, resp) {
    clientesModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro){
        resp.status(500).json(erro);
      });
  });

  app.get('/api/clientes/:id', function(req, resp) {
    clientesModel.findById(req.params.id)
      .then(function(data){
        resp.json(data);
      }, function(erro){
        resp.status(500).json(erro);
      });
  });

    app.put('/api/clientes/:id', function(req, resp){
        clientesModel.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        .then(function(data){
            resp.json(data);
        }, function(erro){
            resp.status(500).json(erro);
        });
    });

    app.delete('/api/clientes/:id', function(req, resp){
        clientesModel.remove({'_id':req.params.id})
        .then(function(data){
            resp.json(data);
        }, function(erro){
            resp.status(500).json(erro);
        })
    });
  }