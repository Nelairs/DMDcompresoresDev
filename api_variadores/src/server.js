import express, { json, urlencoded } from 'express';
import  router  from './routers/variadores.routers.js';
import AuthRouter from './routers/auth.router.js'
import  cors    from    'cors';
import  './config/db.config.js';
import  './config/passport.config.js'
// import './utils/telegramSender.utils.js'
import  session  from 'express-session';
import passport from 'passport';

/* ----------------------------- PRINT IP LOCAL ----------------------------- */

import { networkInterfaces } from 'os';

const nets = networkInterfaces();
const results = {}; // Or just '{}', an empty object

for (const name of Object.keys(nets)) { 
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}
console.log(results);

/* -------------------------------------------------------------------------- */
/*                               EXPRESS CONFIG                               */
/* -------------------------------------------------------------------------- */
const   PORT  =  8080
const app   =   express();
app.use(express.json());
app.use(express.urlencoded({extended:   true}));
app.use(cors())

app.use(
    session({
        secret: process.env.SECRET_EXPRESS,
        cookie: {
            maxAge: Number(process.env.EXPIRE),
        },
        rolling: true,
        resave: true,
        saveUnitialized:    true,
    }),
);

app.use(passport.initialize())
app.use(passport.session())

/* -------------------------------------------------------------------------- */
/*                                   ROUTING                                  */
/* -------------------------------------------------------------------------- */
app.use('/api', router);

app.use('/', AuthRouter)

/* -------------------------------------------------------------------------- */
/*                              INITIALIZE SERVER                             */
/* -------------------------------------------------------------------------- */
const   server  =   app.listen(PORT,    ()  =>{

console.log(`Server started on http://localhost:${PORT}`);
});
server.on('error',  (err)   =>  console.log(err));