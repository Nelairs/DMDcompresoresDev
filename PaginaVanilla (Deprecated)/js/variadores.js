
$(document).ready(() => {
  let carta = "";
  let i=0
  let nombre 
  let color,estado
  let list = "http://175.10.0.166:8080/list"
  let faker ="http://175.10.0.166:8080/faker"
  let variadores ="http://175.10.0.166:8080/api/variadores"

  const getDatabase = () => axios.get(variadores)
      .then((res)=>{
          console.log(res)
          res.data.forEach(data=> {
            numeroCliente = `${data.nombre_cliente}`
            nombre = numeroCliente.replace(/["_"]/g," ");

            switch (data.estado_equipo) {
              case 0: 
                color ="bg-yellow-500"
                estado ="Por hacer"
              break;
              case 1:
                color ="bg-green-700"
                estado ="Haciendo"
              break;

              case 2:
                color ="bg-red-700"
                estado ="Bloqueado"
              break;

              case 3:
                color ="bg-blue-700"
                estado ="Hecho"
              break;
            }

            carta += ` 
            <div class="bg-gray-200 border-2 border-gray-600 rounded-xl w-60 flex flex-col font-mono items-center" >
                <ul class="flex flex-col text-sm p-2 gap-4" style="Cursor:context-menu;">
            <li class="text-center text-lg">Variador ${data.modelo_equipo}</li>
            <li>N°:${data.numero_equipo}</li>
            <li>Nombre del cliente:${nombre}</li>
            <li>Potencia:${data.potencia_equipo}kW</li>
            <li>Fecha de ingreso:10/5 13:30hs</li>
            </ul>
            <button type="button" style="Cursor:context-menu; Text-Decoration: None !important;" class="botonMostrar ${color} text p-2 mb-2 rounded-xl text-white" data-activado="${data.estado_equipo}" data-id="${data._id}">${estado}</button>
                </div>
                `;

              
  
          document.getElementById("contenedor").innerHTML = carta;
          });
      })
      getDatabase();


  /*const handleClickMostrar = () => {
    $(".botonMostrar").click((event) => {
      let botonClickeado = $(event.currentTarget);
      let id = botonClickeado.attr("data-id");
      console.log(botonClickeado)

      // console.log("Valor del botón sin convertir: ", botonClickeado.attr("data-activado"));
      let valorActual = botonClickeado.attr("data-activado"); // Esto lo recibe como un string
      let valorActualConvertido = valorActual == "true"; // Acá lo convierto a Booleano
      // console.log("Valor convertido: ", valorActualConvertido);

      botonClickeado.attr("data-activado", !valorActualConvertido);
      if (valorActualConvertido == true) {
        //Es igual que if (valorActualConvertido)
        botonClickeado.removeClass("bg-green-700");
        botonClickeado.addClass("bg-red-700");
        botonClickeado.text("Parado");
      } else {
        botonClickeado.addClass("bg-green-700");
        botonClickeado.removeClass("bg-red-700");
        botonClickeado.text("En funcionamiento");
      }

      axios.post(variadores, {
           idVariador: id,
         })
         .then((response) => {

        })
         .catch();
    });
  };

  const handleClickBorrar = () => {
    $(".botonBorrar").click((event) => {
      let botonClickeado = $(event.currentTarget);
      let id = botonClickeado.attr("data-id");
      console.log("botonBorrar");
    });
  };

 

  const getDatabaseFaker = () =>
    axios
      .get("http://175.10.0.166:8080/faker")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });*/
});
