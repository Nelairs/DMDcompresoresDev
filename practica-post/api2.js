let carta =''

axios.get('http://175.10.0.166:8080/list')
.then((res)=>{
    console.log(res.data)
    res.data.forEach(data=> {
        console.log(data.title)
        carta += `
        <div class="">
       <h1 class="text-sky-400">${data.title}</h1>
       <img class="w-40 h-40" src="${data.image}">
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

