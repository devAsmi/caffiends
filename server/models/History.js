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
  history_id: {
    type: Schema.Types.ObjectId,
  },
  points: {
    type: Number,
  },
});

const History = model("History", historySchema);
module.exports = History;
