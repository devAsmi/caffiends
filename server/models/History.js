const { Schema, model } = require("mongoose");

const historySchema = new Schema({
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
  },
  orderDate: {
    type: String,
  },
});

const History = model("History", historySchema);
module.exports = History;
