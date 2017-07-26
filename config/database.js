var mongoose = require('mongoose');

module.exports = function(uri) {
  mongoose.connect(uri);

  mongoose.connection.on('connected', function() {
    console.log('mongoose conectado em', uri);
  });
}