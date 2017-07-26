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
  cliente: String,
  valor_total: Number,
  desconto: Number,
  origem_venda: String, //(Atacado/Varejo)
  tipo_operacao: String, //(Venda direta/Interestadual)
  tipo_venda: String, //(Tipo 1/Tipo 2)
  itens: [itemSchema]
});

mongoose.model('pedidos', modelo);
