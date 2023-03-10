
const { Schema } = require('mongoose');

const coldBevSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true,
  },
});

const coldBev = mongoose.model('coldBev', coldBevSchema);

module.exports = coldBev;