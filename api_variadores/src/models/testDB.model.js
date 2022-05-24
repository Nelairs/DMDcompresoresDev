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
        type:   String,
        required:   true
    },
    estado_equipo:{
        type:   Number,
        required:   true
    }

});

export  const   DbTestModel =   mongoose.model('Variadores', Schema);