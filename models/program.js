const mongoose = require('mongoose'); //handles the schema

const programSchema = new mongoose.Schema({
  name: String,
  frequency: String,
  level: String,
  image: String,
  lift: [{ type: mongoose.Schema.ObjectId, ref: 'Lift' }],
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Program', programSchema); // shows javascript what to call in the file.
