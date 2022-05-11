let carta =''
axios.get('http://175.10.0.166:8080/list')
.then((res)=>{
    console.log(res.data)
    res.data.forEach(data=> {
        carta += `
        <div class=" border-2 border-gray-600 rounded-xl w-60 flex flex-col items-center">
       <h1 class="text-sky-400">${data.title}</h1>
       <p class="text-xs">${data.description}</p>
       <img class="w-40 h-40" src="${data.image}">
       <h2 class="">Price: ${data.price}</h2>
        </div>


        `
        document.getElementById('contenedor').innerHTML = carta;
    });
})
.catch((err)=>{console.log(err)})

/*axios.post('http://175.10.0.179:8080/testPost',{
frutas
})
.then((res)=>{console.log(res);})
.catch((err)=>{console.log(err)}) 
*/

