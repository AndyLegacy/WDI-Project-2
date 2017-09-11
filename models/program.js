const mongoose = require('mongoose'); //handles the schema
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  rating: Number,
  user: String
});
const programSchema = new mongoose.Schema({
  name: String,
  frequency: String,
  level: String,
  image: String,
  description: String,
  lift: [{ type: mongoose.Schema.ObjectId, ref: 'Lift' }],
  user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [commentSchema]
});

module.exports = mongoose.model('Program', programSchema); // shows javascript what to call in the file.
