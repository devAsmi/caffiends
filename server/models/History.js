const Item = require("./Item");

const { Schema, model } = required("mongoose");

const historySchema = new Schema({

   items:[{
    type: String,
    required: true,

   }],

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