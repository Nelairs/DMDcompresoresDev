import express, { json, urlencoded } from 'express';
import  router  from './routers/test.routers.js';
import  cors    from    'cors';
import  './config/db.config.js';

const   PORT  =  8080
const app   =   express();
app.use(express.json());
app.use(express.urlencoded({extended:   true}));
app.use(cors())

app.use('/', router);



const   server  =   app.listen(PORT,    ()  =>{

console.log(`Server started on http://localhost:${PORT}`);
});
server.on('error',  (err)   =>  console.log(err));