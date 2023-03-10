const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
    foodName:{
        type:String,
        required: true,
        trim :true
    },
    price:{
        type:Number,
        required:true,
    },
    foodDes:{
        type: Text,
        required:true,
    },
    image:{
        type:String
    },
    points:{
        type:Number
    }
});

const Food = model('food',foodSchema);

module.exports = Food;
