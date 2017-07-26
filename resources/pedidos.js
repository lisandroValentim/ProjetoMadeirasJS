var mongoose = require('mongoose');
var pedidosModel = mongoose.model('pedidos');

module.exports = function (app) {
  app.get('/api/pedidos', function(req, resp){
    pedidosModel.find().populate('cliente', 'nome documento')
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.post('/api/pedidos', function(req, resp) {
    pedidosModel.create(req.body)
      .then(function(data) {
        resp.status(201).json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.get('/api/pedidos/:id', function(req, resp) {
    pedidosModel.findById(req.params.id)
      .then(function(data){
        resp.json(data);
      }, function(erro){
        resp.status(500).json(erro);
      });
  });

    app.put('/api/pedidos/:id', function(req, resp){
        pedidosModel.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        .then(function(data){
            resp.json(data);
        }, function(erro){
            resp.status(500).json(erro);
        });
    });

    app.delete('/api/pedidos/:id', function(req, resp){
        pedidosModel.remove({'_id':req.params.id})
        .then(function(data){
            resp.json(data);
        }, function(erro){
            resp.status(500).json(erro);
        })
    });
  
}