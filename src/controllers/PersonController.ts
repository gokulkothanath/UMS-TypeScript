import express, { request } from 'express';

import { PersonModel } from '../db/Person';

class PersonController{

    getAllPersons=async (request:express.Request,response:express.Response)=>{
          try {
            const person=await PersonModel.find();
            return response.sendStatus(200).json({data:person})
          } catch (error) {
            //return response.sendStatus(400);
          }

    }
    getPersons=async (request:express.Request,response:express.Response)=>{
        try {
            const id=request.params
          const person=await PersonModel.findById(id);
          return response.sendStatus(200).json({data:person})
        } catch (error) {
         console.log(error);
        }

  }
  createPersons=async (request:express.Request,response:express.Response)=>{
    try {
        const {name,age,place}=request.body
      const person=new PersonModel({
        name:name,
        age:age,
        place:place
      })
      await person.save();
      return response.sendStatus(200).json({message:"Person Created"})
    } catch (error) {
     // return response.sendStatus(400);
     console.log(error);
    }
 }
 updatePersons=async (request:express.Request,response:express.Response)=>{
    try {
        const {name,age,place}=request.body
        const id=request.params
        const person=await PersonModel.findById(id);
        if(person){
            person.name=name;
            person.age=age;
            person.place=place;
            await person.save();
        return response.sendStatus(200).json({message:'updated successfully'})
        }
     // return response.sendStatus(400)
    } catch (error) {
      //return response.sendStatus(400);
      console.log(error);
    }
 }
 deletePerson=async(reuest:express.Request,response:express.Response)=>{
    try {
        const id=request.params
        const person=await PersonModel.findByIdAndDelete({_id:id});
        return response.sendStatus(200).json({message:'Person Deleted'})
    } catch (error) {
       // return response.sendStatus(400);
       console.log(error);
    }
 }
}
export default new PersonController
