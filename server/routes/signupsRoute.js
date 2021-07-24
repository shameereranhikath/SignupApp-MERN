import express from 'express'
import SignupModel from '../models/signupModel.js';
import bcrypt from 'bcrypt'

const signupsRoute=express.Router();


signupsRoute.get('/',(req,res)=>{
    console.log("Data is Required");
    res.send("Data is Required")
})

signupsRoute.post('/signup', async (req,res)=>{

    const saltPassword=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,saltPassword)
    console.log(hashedPassword)

    // const {fullName,username,email,password}=req.body;
    // res.send("Sign up!!!!!!!!!!!!!!!")
    try
    {
        const signupcreated=await SignupModel.create({
            fullName:req.body.fullName,username:req.body.username,email:req.body.email,password:hashedPassword
    
        });
        res.json(signupcreated);
    }
    catch(err)
    {
        res.send(err);
    }
   

    
})




// module.exports=signupsRoute;
export default signupsRoute;





