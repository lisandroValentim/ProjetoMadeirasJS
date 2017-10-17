var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = require('./schema/item-pedido');

var modelo = new Schema({
  numero: {
    type: String,
    required: [true, 'Número é obrigatório']
  },
  emissao: {
      type: Date,
      default: Date.now
  },
  aprovacao: {
    type: Date,
    default: Date.now
  },
  forma_pagto: String,
  condicao_pagto: String,
  cliente: { type: Schema.Types.ObjectId, required: true, ref: 'clientes' },
  valor_total: Number,
  desconto: Number,
  origem_venda: String, //(Atacado/Varejo)
  tipo_operacao: String, //(Venda direta/Interestadual)
  tipo_venda: String, //(Tipo 1/Tipo 2)
  itens: { type: Schema.Types.ObjectId, ref: 'pedido_itens' }
});

modelo.pre('save', function (next) {
  var pedido = this;
  var anoAtual = new Date().getFullYear();
  if (pedido.isNew) {
    generateSequence('pedido', anoAtual)
      .then(function (sequencia) {
        pedido['numero'] = sequencia;
        next();
      });
  } else {
    next()
  }
})

mongoose.model('pedidos', modelo);
