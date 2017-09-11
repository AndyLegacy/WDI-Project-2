const mongoose = require('mongoose');

const liftSchema = new mongoose.Schema({
  name: String,
  image: String
});

module.exports = mongoose.model('Lift', liftSchema);
