import express from 'express';
import  cors    from    'cors';
import faker    from    '@faker-js/faker';
import  *   as dbMethods from '../db/db.methods.js';


const   app =   express();
const router =  express.Router();

const   arrFaker    =   [];
let   arrAux    =   [];   
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


router.get('/variadores',   (req,   res)    =>  {

    dbMethods.getAll()
    .then(function(v)   {
        arrAux = [];
        arrAux =   v;
        res.status(200).send(arrAux) 
    })
    .catch(function(err)  {
        console.log('error:'    +   err);
        res.sendStatus(500);
    });
    
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
    let     arrAux  =   {...body};

    dbMethods.post(arrAux);

    res.sendStatus(200);

    res.sendStatus(200);
})

router.post('/update', (req,   res)    =>  {

    const   {body}  =   req;
    let arrAux  =   {...body};

    //console.log(arrAux._id);
    //console.log(arrAux.estado_equipo);

    dbMethods.update(arrAux._id,    arrAux.estado_equipo);

    res.sendStatus(200);
});

/* -------------------------------------------------------------------------- */
/*                                    MISC                                    */
/* -------------------------------------------------------------------------- */

router.post('/finish', (req,   res)    =>  {

    const   {body}  =   req;
    let arrAux  =   {...body};

    console.log(arrAux._id);

    dbMethods.del(arrAux._id);

    res.sendStatus(200).send(`Borrado OK ID: ${arrAux._id}`)
})


export  default router;