const { Schema, model } = require("mongoose");

const ItemTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const ItemType = model("ItemType", ItemTypeSchema);

module.exports = ItemType;
