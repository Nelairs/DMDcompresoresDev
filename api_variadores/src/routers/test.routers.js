import express from 'express';
import  cors    from    'cors';
import faker    from    '@faker-js/faker';
import  *   as dbMethods from '../db/db.methods.js';


const   app =   express();
const router =  express.Router();

const   arrFaker    =   [];

app.use(cors());

/* -------------------------------------------------------------------------- */
/*                                     GET                                    */
/* -------------------------------------------------------------------------- */

router.get('/', (req,   res)    =>  {
    dbMethods.create();
    res.sendStatus(200);
});

router.get('/faker', (req,   res)    =>  {
    

    for(let i = 0;  i   <   10; i++){
        const   product =   {
            title:          faker.commerce.product(),
            description:    faker.commerce.productDescription(),
            price:          faker.commerce.price(100,   5000,   2,  '$'),
            image:          faker.image.technics()
        }
        arrFaker.push(product);
    }
    
    res.status(200).redirect('/list');
});

router.get('/list', (req,   res)    =>  {

    res.status(200).send(arrFaker);
});

router.get('/formVar',  (req,   res)    =>  {

    
})

/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */

router.post('/testPost',    (req,   res)    =>  {

    const   {body}  =   req;
    let     arrayTest   =   {...body};

    console.log(arrayTest);
    res.status(200).send(`LO QUE MANDASTE ES ${JSON.stringify(arrayTest)}`);
});

router.post('/formPost',    (req,   res)    =>  {

    const {body}    =   req;


})





export  default router;