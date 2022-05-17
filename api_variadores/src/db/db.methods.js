import mongoose from 'mongoose';
import  {   DbTestModel }   from    '../models/testDB.model.js';

const equipoTest = {
    nombre_cliente: "DMD",
    numero_equipo: 1312,
    marca_equipo: "Danfoss",
    potencia_equipo: "37kW",
    numero_serie_equipo: "625537g12hq1",
    entrada_a_revision_desarrollo:  new Date(),
    estado_equipo:  1
<<<<<<< HEAD
  };

export  async   function    post(arrAux){
=======
};
/*
export  async   function    create(){
>>>>>>> 8b7db680cd42e8fa8ad30a00c83e6fba0b2fab5d

    try {
        const response  =   await   DbTestModel.create(arrAux);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
*/

<<<<<<< HEAD
=======
export  async   function    post(arrAux){

    try {
        const response  =   await   DbTestModel.create(arrAux);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}



>>>>>>> 8b7db680cd42e8fa8ad30a00c83e6fba0b2fab5d
export  async   function    getAll(){

    try {
        const   response    =   await   DbTestModel.find();
        return  response;
    } catch (error) {
        console.log(error);
    }
}

/*
export  async   function    get(){
    
}
*/