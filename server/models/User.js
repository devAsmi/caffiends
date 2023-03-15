// Define Mongoose
const { Schema, model, Types } = require("mongoose");
const bcrypt = require ('bcrypt');

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
    match: [/.+@.+\..+/, 'Please enter an email address.'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8, 
  },
  points: Number,
  orderHistory: [History.schema],
});

userSchema.pre('save', async function (next){
  if (this.isNew || this.isModified('password')){
    const saltRounds =12;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
userSchema.methods.isCorrectPassword = async function(password){
  return bcrypt.compare(password, this.password);

};


const User = model("User", userSchema);

module.exports = User;
