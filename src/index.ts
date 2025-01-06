import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
const app=express();
app.use(express.json());
const MONGO_URL='mongodb://localhost:27017/'
mongoose.connect(MONGO_URL,{
    dbName:"TS-CRUD"
}).then(()=>{
    console.log('mongoose connected');
    
})


app.use('/',router)

app.listen(4000,()=>{
    console.log('server running');
})