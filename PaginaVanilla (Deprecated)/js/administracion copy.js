$(document).ready(() => {
  let carta = "";
  let i = 0;
  let nombre;
  let color, estado;
  let variadores = "http://175.10.0.166:8080/variadores";
  let update = "http://175.10.0.166:8080/update";

  const getDatabase = () =>
    axios.get(variadores).then((res) => {
      console.log(res);
      res.data.forEach((data) => {
        numeroCliente = `${data.nombre_cliente}`;
        nombre = numeroCliente.replace(/["_"]/g, " ");

        switch (data.estado_equipo) {
          case 0:
            color = "bg-yellow-500";
            estado = "Por hacer";
            break;
          case 1:
            color = "bg-green-700";
            estado = "Haciendo";
            break;

          case 2:
            color = "bg-red-700";
            estado = "Bloqueado";
            break;

          case 3:
            color = "bg-blue-700";
            estado = "Hecho";
            break;
        }
        carta += ` 
            <div class="bg-gray-200 border-2 border-gray-600 rounded-xl w-60 flex flex-col font-mono items-center" >
                <ul class="flex flex-col">
            <li class=" text-center text-lg p-2">Variador ${
              data.modelo_equipo
            }</li>
            <li class="text-sm p-2">N°:${data.numero_equipo}</li>
            <li class="text-sm p-2">Nombre del cliente:${nombre}</li>
            <li class="text-sm p-2">Potencia:${data.potencia_equipo}kW</li>
            <li class="text-sm p-2">Fecha de ingreso:10/5 13:30hs</li>
            </ul>
            <button type="button" class="botonMostrar ${color} text p-2 mb-2 rounded-xl text-white" data-activado="${
          data.estado_equipo
        }" data-id="${data._id}">${estado}</button>
            <button type="button" class="botonBorrar bg-red-700 text p-2 mb-2 rounded-xl text-white" data-id="${i}" data-variador="${
          i % 2
        }">Terminar</button>
                </div>
                `;
      });
      carta += `<button type="button" class="botonAñadir"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> </button>`;

      document.getElementById("contenedor").innerHTML = carta;

      handleClickEstado();
      handleClickTerminar();
      handleClickAñadir();
      handleClickAñadirCerrar();
    });

  const handleClickEstado = () => {
    $(".botonMostrar").click((event) => {
      //busca todos los elementos con la clase "botonMostrar" e indentifica el click para traer un elemento jquery del boton
      let botonClickeado = $(event.currentTarget); //toma el contenedor del elemento jquery
      let id = botonClickeado.attr("data-id"); //toma el id del contenedor

      let valorActual = botonClickeado.attr("data-activado"); // Recibe un true o false como string
      // Acá lo convierto a Booleano

      let estado_equipo = valoresPara1.contains(valorActual) ? 1 : 0;


        let estados = {
          0: {
            bg: 'bg-green-700',
            text: 'Haciendo',
            estados_from: [0,2,3] 
          },
          1: {
            bg: 'bg-red-700',
            text: 'Bloqueado' ,
            estados_from: [1] 
          },
        }
        botonClickeado.removeClass("bg-red-700");
        botonClickeado.addClass("bg-green-700");
        botonClickeado.text("Haciendo");
     
     
        botonClickeado.addClass("bg-green-700");
        botonClickeado.removeClass("bg-red-700");
        botonClickeado.text("Bloqueado");

        axios
          .post(update, {
            _id: id,
            estado_equipo: estado_equipo,
          })
          .then(() => {
            console.log("bien");
          })
          .catch(() => {
            console.los("mal");
          });       
      });

  const handleClickAñadir = () => {
    $(".botonAñadir").click(() => {
      let contenedor = $(estilosAñadir);
      contenedor.removeClass("hidden");
    });
  };
  const handleClickAñadirCerrar = () => {
    $("#botonAñadirCerrar").click(() => {
      let contenedor = $(estilosAñadir);

      contenedor.addClass("hidden");
    });
  };

  const handleClickTerminar = () => {
    $(".botonBorrar").click((event) => {
      let botonClickeado = $(event.currentTarget);
    });
  };
  
  getDatabase();
});
