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
};
/*
export  async   function    create(){

    try {
        const response  =   await   DbTestModel.create(arrAux);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
*/

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

/*
export  async   function    get(){
    
}
*/