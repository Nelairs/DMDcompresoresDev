import  mongoose from 'mongoose';


const   Schema  =   new mongoose.Schema({

    nombre_cliente:{
        type:   String,
        required:   true
    },
    numero_equipo:{
        type:   Number,
        required:   true
    },
    marca_equipo:{
        type:   String
    },
    potencia_equipo:{
        type:   String,
        required:   true
    },
    numero_serie_equipo:{
        type:   String
    },
    entrada_a_revision_desarrollo:{
        type:   Date,
        required:   true
    },
    estado_equipo:{
        type:   Number,
        required:   true
    }

});

export  const   DbTestModel =   mongoose.model('Variadores', Schema);