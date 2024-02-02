
var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     name:{
        type : String,
        required : true,
        trim : true,

     },
     email:{
        type : String,
        required : true,
        unique:true
     },
     password:{
        type : String,
     },
     phone:{
        type : String,
        required : true
     },
     address:{
        type : String,
        required : true
     },
     role:{
        type : Number,
        required : true,
        default: 0
     }

}, {timestamps : true});

module.exports = mongoose.model('users', userSchema);

//so users is basically a collection based on userSchema