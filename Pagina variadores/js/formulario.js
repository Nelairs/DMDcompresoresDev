$(document).ready(()=>{
    let updateTest ="http://175.10.0.166:8080/formPost"

$("#formulario").submit(()=>{
    let name = $("#nombre_cliente").val();
    let nombre = name.replace(/[" "]/g,"_")
    let numero_equipo= $("#numero_equipo").val();
    let modelo = $("#modelo").val();
    let potencia = $("#potencia_equipo").val();
    let serie = $("#numero_serie").val();
    let marca =$("#marca_equipo").val();

    axios.post(updateTest, {
        nombre_cliente: nombre,
        numero_equipo: numero_equipo,
        modelo_equipo: modelo,
        potencia_equipo: potencia, 
        numero_serie_equipo: serie,
        marca_equipo: marca,
        fecha_de_entrada: new Date(),
        estado_equipo: 0,
    })
    .then(()=>{
        console.log("cheto")
        location.reload();
    })
    .catch(()=>{
        console.log("no cheto")
    })

    

})    













})
