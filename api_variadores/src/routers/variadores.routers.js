import express from "express";
import cors from "cors";
import * as dbMethods from "../db/db.methods.js";
// import * as telegramMethods from "../utils/telegramSender.utils.js";
import * as mailMethods from "../utils/mailSender.utils.js";

//import * as AuthMiddleware from "../middlewares/auth.middleware.js";
//import * as PermMiddleware from "../middlewares/permissions.middelware.js";

const app = express();
const router = express.Router();

let arrAux = [];
app.use(cors());

/* -------------------------------------------------------------------------- */
/*                                     GET                                    */
/* -------------------------------------------------------------------------- */

router.get("/", (req, res) => {
  dbMethods.create();
  res.sendStatus(200);
});

router.get("/variadores", (req, res) => {
  //LISTA VARIADORES VIEW ONLY
  let finishedVar = 'false';

  if (req.query.finished == 'undefined') {
    // console.log(`HARDCODE`);
    finishedVar = 'false';
  } else {
    finishedVar = req.query.finished;
    // console.log(`ACA ${typeof(req.query.finished)}`);
  }

  if (finishedVar === 'true') {
    // FILTRO POR TRUE/TERMINADOS
    // console.log(`FILTRADO POR TRUE`);
    if (req.query.name !== 'undefined') {
      // FILTRO POR NOMBRE
      dbMethods
        .getFilteredHist(req.query.name)
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
      dbMethods
        .getAllHistoric()
        .then(function (v) {
          arrAux = [];
          arrAux = v;
          res.status(200).send(arrAux);
        })
        .catch(function (err) {
          console.log("error:" + err);
          res.sendStatus(500);
        });
    }
  } else if(finishedVar === 'false') {
    // FILTRO POR TODOS/NO FINALIZADOS
    // console.log(`FILTRADO POR FALSES`);
    if (req.query.name !== 'undefined') {
      dbMethods
        .getFiltered(req.query.name)
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
    }
  }
});

router.get("/variadores/historicos", (req, res) => {
  dbMethods
    .getAllHistoric()
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
  }
);

/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */

router.post("/formPost", (req, res) => {
  const { body } = req;
  let arrAux = { ...body };

  dbMethods.post(arrAux).then(function (v) {
    console.log(v);
    res.status(200).send(v);
  });
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
  let arrAux = {};
  let arrArchive = {};
  /* -------- TRAIGO LA DATA DEL VFD A BORRAR PARA CARGARLA EN EL MAIL -------- */

  await dbMethods
    .getByID(arrBody._id)
    .then(function (v) {
      arrAux = [];
      arrAux = v;

      arrArchive = {
        fecha_de_salida: arrBody.fecha_de_salida,
        informe_salida: arrBody.conclusion,
        horas_dedicadas: arrBody.horas_dedicadas,
        nombre_cliente: arrAux.nombre_cliente,
        numero_equipo: arrAux.numero_equipo,
        modelo_equipo: arrAux.modelo_equipo,
        marca_equipo: arrAux.marca_equipo,
        potencia_equipo: arrAux.potencia_equipo,
        numero_serie_equipo: arrAux.numero_serie_equipo,
        fecha_de_entrada: arrAux.fecha_de_entrada,
        estado_equipo: 3   //ESTADO 3 PARA TERMINADO 
      };
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
      // telegramMethods.sendTgramNoti(arrAux),
      mailMethods.sendMail(addOpts),
      res.status(200).send(`Borrado OK ID: ${arrBody._id}`)
    )
    .catch((e) => {
      console.log(e), res.statusCode(500);
    });

  // console.log(arrArchive);

  /* ------------------- CARGO EL VARIADOR EN LOS HISTORICOS ------------------ */

  await dbMethods.postHist(arrArchive);
});

export default router;
