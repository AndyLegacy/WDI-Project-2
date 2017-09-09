const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: { type: String},
  frequency: { type: String},
  level: {type: String},
  author: {type: String}
});

module.exports = mongoose.model('Program', programSchema);
