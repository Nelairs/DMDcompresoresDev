import mongoose from 'mongoose';
import  {   DbTestModel }   from    '../models/testDB.model.js';


export  async   function    post(arrAux){

    try {
        const response  =   await   DbTestModel.create(arrAux);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


export  async   function    getAll(){

    try {
        const   response    =   await   DbTestModel.find();
        return  response;
    } catch (error) {
        console.log(error);
    }
}


export  async   function    update(idFront, newState){

    try {
        const   response    =   await   DbTestModel.updateOne({_id: idFront},   {$set:{'estado_equipo': newState}});
        return  response;
    } catch (error) {
        console.log(error);
    }
}

export  async   function    del(idFront){
    
    try {
        const response  =   await   DbTestModel.deleteOne({_id: idFront})
        return response
    } catch (error) {
        console.log(error);
    }
}
