const { Schema, model } = require("mongoose");

const MenuItem = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
  },
  itemType: {
    type: String,
    required: true,
  },
});

const Item = model("MenuItem", MenuItem);

module.exports = Item;
