import mongoose from 'mongoose';
import  {   DbTestModel }   from    '../models/testDB.model.js';

const equipo1 = {
    nombre_cliente: "DMD",
    numero_equipo: 1312,
    marca_equipo: "Danfoss",
    potencia_equipo: "37kW",
    numero_serie_equipo: "625537g12hq1",
    entrada_a_revision_desarrollo:  new Date(),
    estado_equipo:  1
  };

export  async   function    create(){

    try {
        const response  =   await   DbTestModel.create(equipo1);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}




export  async   function    getAll(){

    try {
        const   response    =   await   DbTestModel.find();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

/*
export  async   function    get(){
    
}
*/