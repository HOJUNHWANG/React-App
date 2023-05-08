const mongoose = require('mongoose');

const sneakerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  type: { type: String, required: true },
  imageUrl: {type: String}
});

module.exports = mongoose.model('Sneaker', sneakerSchema);