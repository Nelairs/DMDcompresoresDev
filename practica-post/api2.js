let carta =''
const carga = document.getElementById('carga')


const getDatabase = () => axios.get('http://175.10.0.166:8080/list')
.then((res)=>{
    console.log(res)
    res.data.forEach(data=> {
        carta += ` 
        <div class="bg-gray-200 border-2 border-gray-600 rounded-xl w-60 flex flex-col font-mono
         items-center">
        <ul class="flex flex-col">
       <li class=" text-center text-lg p-2">Variador s100</li>
       <li class="text-sm p-2">N°:1953</li>
       <li class="text-sm p-2">Nombre del cliente:De Simone Miguel</li>
       <li class="text-sm p-2">Potencia:7,5kW</li>
       <li class="text-sm p-2">Fecha de ingreso:10/5 13:30hs</li>
       </ul>
       <button type="button" class="bg-green-700 text p-2 mb-2 rounded-xl text-white">En proceso</button>
        </div>
        `
        document.getElementById('contenedor').innerHTML = carta;
    });
})
.catch((err)=>{console.log(err)})

const getDatabaseFaker = () => axios.get('http://175.10.0.166:8080/faker')
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)})



getDatabase()





