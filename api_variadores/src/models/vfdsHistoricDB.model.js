import  mongoose from 'mongoose';


const   Schema  =   new mongoose.Schema({

    nombre_cliente:{
        type:   String,
        required:   true
    },
    numero_equipo:{
        type:   String,
        required:   true
    },
    modelo_equipo:{
        type:   String,
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
    fecha_de_entrada:{
        type:   Date,
        required:   true
    },
    fecha_de_salida:{   
        type:   Date,
        required:   true
    },
    informe_salida:{
        type:   String,
        required:   false
    },
    horas_dedicadas:{
        type:   Number
    },
    estado_equipo:{
        type:   Number,
        required:   true
    }

});

export  const   DbHistoricModel =   mongoose.model('VariadoresHistoric', Schema);