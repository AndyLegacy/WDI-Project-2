const mongoose = require('mongoose');

const liftSchema = new mongoose.Schema({
  lift: String,
  level: String
});

module.exports = mongoose.model('Lift', liftSchema);
