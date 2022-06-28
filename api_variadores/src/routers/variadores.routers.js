import express from 'express';
import  cors    from    'cors';
import faker    from    '@faker-js/faker';
import  *   as dbMethods from '../db/db.methods.js';
import  *   as mailMethods from '../utils/mailSender.utils.js'

//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

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

router.post('/finish', async (req,   res)    =>  {

    const   {body}  =   req;
    let arrBody  =   {...body};
    let arrAux  =   []

    await dbMethods.getByID(arrBody._id)
    .then(function(v)   {
        arrAux = [];
        arrAux =   v;
        //res.status(200).send(arrAux) 
    })
    .catch(function(err)  {
        console.log('error:'    +   err);
        //res.sendStatus(500);
    });

    let addOpts =   {
        to: ['soporte@dmdcompresores.com','jcaminos@dmdcompresores.com'],
        text:   arrAux
    }

    await dbMethods.del(arrBody._id)
    .then(

        mailMethods.sendMail(addOpts),
        res.status(200).send(`Borrado OK ID: ${arrBody._id}`))
    .catch((e)    =>  {
        console.log(e),
        res.statusCode(500)
    });

    
})


export  default router;