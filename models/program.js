const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: String,
  frequency: String,
  level: { type: mongoose.Schema.ObjectId, ref: 'Level' },
  author: String,
  image: String,
  lift: { type: mongoose.Schema.ObjectId, ref: 'Lift' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Program', programSchema);
