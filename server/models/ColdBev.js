
const { Schema, model } = require('mongoose');

const coldBevSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
  },
  points: {
    type: Number
  }
});

const coldBev = mongoose.model('coldBev', coldBevSchema);

module.exports = coldBev;