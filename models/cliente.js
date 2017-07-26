var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelo = new Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatório']
  },
  cpf_cnpj: String,
  rg_inscr_est: String,
  email: String,
  endereco: String,
  cidade: String,
  telefone: String
});

modelo.index({ '$**': 'text' });

mongoose.model('clientes', modelo);
