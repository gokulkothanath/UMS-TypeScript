import mongoose from 'mongoose';
const PersonSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    }
});
export const PersonModel=mongoose.model('Person',PersonSchema);