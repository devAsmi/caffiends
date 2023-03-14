// Define Mongoose
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const History = require("./History");

const userSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter an email address."],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  points: Number,
  // order history can only include the id of the history that we can populate
  // later so that we do not store the same information multiple places
  orderHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "History",
      required: true,
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
userSchema.methods.iscorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
