import mongoose from 'mongoose';
import  {   DbTestModel }   from    '../models/vfdsDB.model.js';

import { DbHistoricModel } from '../models/vfdsHistoricDB.model.js';

export  async   function    post(arrAux){

    try {
        
        const response  =   await   DbTestModel.create(arrAux);
        // console.log(response);
        return  response
    } catch (error) {
        console.log(error);
    }
}


export  async   function    getAll(){

    try {
        const   response    =   await   DbTestModel.find();
        
        // const   response    =   await   dbName.find();
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
        //console.log(`El ID a borrar es: ${idFront}`);
        const response  =   await   DbTestModel.deleteOne({_id: idFront})
        return response
    } catch (error) {
        console.log(error);
    }
}

export  async   function    getByID(idFront){

    try {
        const   response    =   await   DbTestModel.findById({_id: idFront});
        return  response;
    } catch (error) {
        console.log(error);
    }
}


/* -------------------------------------------------------------------------- */
/*                                  HISTORIC                                  */
/* -------------------------------------------------------------------------- */

export  async   function    postHist(arrAux){

    try {
        const response  =   await   DbHistoricModel.create(arrAux);
        //console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export  async   function    getAllHistoric(){

    try {
        const   response    =   await   DbHistoricModel.find();
        
        // const   response    =   await   dbName.find();
        return  response;
    } catch (error) {
        console.log(error);
    }
}