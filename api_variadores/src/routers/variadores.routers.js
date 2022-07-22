import express from "express";
import cors from "cors";
import faker from "@faker-js/faker";
import * as dbMethods from "../db/db.methods.js";
import * as telegramMethods  from '../utils/telegramSender.utils.js'
import * as mailMethods from "../utils/mailSender.utils.js";
import passport from "../utils/passport.utils.js";
//import * as AuthMiddleware from "../middlewares/auth.middleware.js";
//import * as PermMiddleware from "../middlewares/permissions.middelware.js";

const app = express();
const router = express.Router();

const arrFaker = [];
let arrAux = [];
app.use(cors());

/* -------------------------------------------------------------------------- */
/*                                     GET                                    */
/* -------------------------------------------------------------------------- */

router.get("/", (req, res) => {
  dbMethods.create();
  res.sendStatus(200);
});

router.get("/faker", (req, res) => {
  for (let i = 0; i < 10; i++) {
    const product = {
      title: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(100, 5000, 2, "$"),
      image: faker.image.technics(),
    };
    arrFaker.push(product);
  }

  res.status(200).redirect("/list");
});

router.get("/list", (req, res) => {
  res.status(200).send(arrFaker);
});

router.get("/variadores", (req, res) => {
  //LISTA VARIADORES VIEW ONLYS

  dbMethods
    .getAll()
    .then(function (v) {
      arrAux = [];
      arrAux = v;
      res.status(200).send(arrAux);
    })
    .catch(function (err) {
      console.log("error:" + err);
      res.sendStatus(500);
    });
});

/* router.get(
  "/variadores/admin",
  AuthMiddleware.checkAuthentication,
  (req, res) => {
    //LISTA VARIADORES VIEW ONLYS

    const { body } = req;
    let idFront = { ...body };

    let allowed = false;

    console.log(idFront);
    PermMiddleware.checkPermissions(idFront, req, res)
      .then(function (v) {
        const { permissions } = req.user;
        console.log(permissions[0]);
        if (permissions[0].includes("vfd_admin")) {
          allowed = true;

          dbMethods
            .getAll()
            .then(function (v) {
              arrAux = [];
              arrAux = v;
              res.status(200).send(arrAux);
            })
            .catch(function (err) {
              console.log("error:" + err);
              res.sendStatus(500);
            });
        } else {
          res.status(403);
        }
      })
      .catch(function (err) {
        console.log("error:" + err);
        res.sendStatus(500);
      });
  }
);
 */

router.get(
  "/variadores/admin",
  
  (req, res) => {
    //LISTA VARIADORES VIEW ONLYS

    const { body } = req;
    let idFront = { ...body };

  

    //console.log(idFront);
    
          dbMethods
            .getAll()
            .then(function (v) {
              arrAux = [];
              arrAux = v;
              res.status(200).send(arrAux);
            })
            .catch(function (err) {
              console.log("error:" + err);
              res.sendStatus(500);
            });
       
      })
     
  


/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */

router.post("/testPost", (req, res) => {
  const { body } = req;
  let arrayTest = { ...body };

  console.log(arrayTest);
  res.status(200).send(`LO QUE MANDASTE ES ${arrayTest}`);
});

router.post("/formPost", (req, res) => {
  const { body } = req;
  let arrAux = { ...body };

  dbMethods.post(arrAux);


  res.status(200).send(arrAux);

  
});

router.post("/update", (req, res) => {
  const { body } = req;
  let arrAux = { ...body };

  //console.log(arrAux._id);
  //console.log(arrAux.estado_equipo);

  dbMethods.update(arrAux._id, arrAux.estado_equipo);

  res.sendStatus(200);
});

/* -------------------------------------------------------------------------- */
/*                                    MISC                                    */
/* -------------------------------------------------------------------------- */

router.post("/finish", async (req, res) => {
  const { body } = req;
  let arrBody = { ...body };
  let arrAux = [];

  /* -------- TRAIGO LA DATA DEL VFD A BORRAR PARA CARGARLA EN EL MAIL -------- */

  await dbMethods
    .getByID(arrBody._id)
    .then(function (v) {
      arrAux = [];
      arrAux = v;
    })
    .catch(function (err) {
      console.log("error:" + err);
    });

  /* --------- CONFIGURO OPCIONES ADICIONALES PARA CARGAR A NODEMAILER -------- */

  let addOpts = {
    to: ["soporte@dmdcompresores.com"],
    text: arrAux,
  };

  /* ------------------------- METODO DELETE DE LA DB ------------------------- */

  await dbMethods
    .del(arrBody._id)
    .then(
      telegramMethods.sendTgramNoti(arrAux),
      mailMethods.sendMail(addOpts),
      res.status(200).send(`Borrado OK ID: ${arrBody._id}`)
    )
    .catch((e) => {
      console.log(e), res.statusCode(500);
    });
});

export default router;
