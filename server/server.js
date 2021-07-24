// const express=require("express");
// const bodyParser=require("body-parser")
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
// const cors=require('cors')
import signupsRoute from './routes/signupsRoute.js';
// const signupsRoute =require('./routes/signupsRoute.js')
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use('/api/',signupsRoute)
const PORT=process.env.port||5000

mongoose.connect('mongodb+srv://username:password@cluster0.g1i6s.mongodb.net/book-keeping-app',{useUnifiedTopology:true,useFindAndModify:true,useNewUrlParser:true,useCreateIndex:true})
.then(()=>console.log('Databse connected'))
.catch((error)=>console.log(error))

app.listen(PORT,()=>console.log(`Server Started at http://localhost:${PORT}`))



