import mongoose from 'mongoose';


const sinupSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

const SignupModel=mongoose.model('signup',sinupSchema)

export default SignupModel;
   