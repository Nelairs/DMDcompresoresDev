import express, { json, urlencoded } from 'express';
import  router  from './routers/test.routers.js';
import  cors    from    'cors';
import  './config/db.config.js';
import  './config/passport.config.js'
import  session  from 'express-session';
import passport from 'passport';
import AuthRouter from './routers/auth.router.js'

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