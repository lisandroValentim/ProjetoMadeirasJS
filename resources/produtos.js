var mongoose = require('mongoose');

var produtosModel = mongoose.model('produtos');
var parseParams = require('../utils/parse-params');

module.exports = function (app) {
    app.get('/api/produtos', function(req, resp){
    var fields = {
        score: { $meta: 'textScore'},
        _id: 1,
        cod_produto: 1,
        descricao: 1,
        especie: 1,
        unidade_medida: 1,
        tipo_madeira: 1,
        tratamento: 1,
        qtd_estoque: 1,
        preco: 1,
        tabela_tipi: 1
    };

      produtosModel.find(parseParams(req.query.filter), fields, {sort: {score: {$meta: 'textScore'}, descricao: 1}} )
        .then(function(dados){
            resp.json(dados);
        }, function(erro){
            resp.status(500).json(erro);
        })
    });

    app.get('/api/produtos/:id', function(req, resp) {
        produtosModel.findById(req.params.id)
        .then(function(data){
            resp.json(data);
        }, function(erro){
            resp.status(500).json(erro);
        });
    });


    app.post('/api/produtos', function(req, resp){
        produtosModel.create(req.body)
         .then(function(dado){
             resp.json(dado);
         }, function(erro){
             resp.status(500).json(erro);
         });
    });

    app.put('/api/produtos/:id', function(req, resp){
        produtosModel.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        .then(function(data){
            resp.json(data);
        }, function(erro){
            resp.status(500).json(erro);
        });
    });

    app.delete('/api/produtos/:id', function(req, resp){
        produtosModel.remove({'_id':req.params.id})
        .then(function(data){
            resp.json(data);
        }, function(erro){
            resp.status(500).json(erro);
        })
    });

}