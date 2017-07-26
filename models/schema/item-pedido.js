var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelo = new Schema({
  numero: {
    type: String,
    required: [true, 'Número é obrigatório']
  },
  quantidade: Number,
  valor_unitario: Number,
  valor_total: Number
});

