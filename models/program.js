const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: String,
  frequency: String,
  level: String,
  author: String,
  image: String
});

module.exports = mongoose.model('Program', programSchema);
