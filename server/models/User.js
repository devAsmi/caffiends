// Define Mongoose
const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    points: Number,  
    orderHistory: [History]
});

const User = model("User", userSchema)

module.exports = User;
