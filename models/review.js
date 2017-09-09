const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  text: String,
  rating: String

});

module.exports = mongoose.model('Review', reviewSchema);
