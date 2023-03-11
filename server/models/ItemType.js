const mongoose = require("mongoose");

const { Schema } = mongoose;

const ItemTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const ItemType = mongoose.model("ItemType", ItemTypeSchema);

module.exports = ItemType;
