import dotenv from 'dotenv';
import  mongoose    from    'mongoose';

dotenv.config({ path: '../.env'});

mongoose.connect('mongodb://localhost:27017/testDbVar', (err)   =>  {

    if(err){
        console.log('❌Error al conectarse a MongoDB❌');
        console.log(err);
    }else{
        console.log('✔Conectado a MongoDB✔');
    }
});


export  default mongoose;