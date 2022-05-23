import  dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.connect('MONGO_URI=mongodb://175.10.0.166:27027/testDbVar', (err)   =>  {
    if(err){
        console.log('No se pudo conectar a MongoDB')
    }else{
        console.log('Conectado a MongoDB')
    }
});

export  default mongoose;