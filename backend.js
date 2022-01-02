const mongoose = require("mongoose");
require("dotenv").config();
var validator = require('validator');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/signupuser').then(()=>{console.log("success")});

mongoose.connect(process.env.DATABASE).then(()=>{console.log("success")});
const MySchema =new mongoose.Schema({
    email: {
        type:String,
         validate(value){
           if(!validator.isEmail(value)){
             throw new Error("EMAIL IS NOT VALID");
           }
         }
      },
    password:{
        type:String,
        required:true
    },
    message:{
        type:String,
    }
})

const Register =new mongoose.model("Register",MySchema);

module.exports=Register;
// mongodb+srv://usersignup:Kanke@123@cluster0.lasri.mongodb.net/usersignup?retryWrites=true&w=majority
// mongo "mongodb+srv://usersignup:Kanke@123@cluster0.lasri.mongodb.net/usersignup"