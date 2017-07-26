var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var modelo = new Schema({
  cod_produto: {
    type: String,
    required: [true, 'Código é obrigatório']
  },
  descricao: {
    type: String,
    required: [true, 'Descrição é obrigatório']
  },
  especie: String,
  unidade_medida: String,
  tipo_madeira: String,
  tratamento: String,
  qtd_estoque: Number,
  preco: Number,
  tabela_tipi: String
});

modelo.index({ '$**': 'text' });
mongoose.model('produtos', modelo);
