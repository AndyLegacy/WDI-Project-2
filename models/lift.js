const mongoose = require('mongoose');

const liftSchema = new mongoose.Schema({
  text: String

});

module.exports = mongoose.model('Review', liftSchema);
