var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelo = new Schema({
  produto: { type: Schema.Types.ObjectId, required: true, ref: 'produtos' },
  quantidade: Number,
  valor_unitario: Number
});

mongoose.model('pedido_itens', modelo);