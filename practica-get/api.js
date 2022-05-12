let titulos =""
let pagina = 1
const btnSiguente = document.getElementById('btnSiguente')
const btnAnterior = document.getElementById('btnAnterior')

btnSiguente.addEventListener('click' , ()=> {
    if(pagina <1000){
        titulos ="";
        pagina += 1;
      peliculas();
        console.log(pagina);
        scroll(top)
    }
});
btnAnterior.addEventListener('click' , () =>{
    if(pagina >1){
        titulos ="";
        pagina -= 1;
      peliculas();
        console.log(pagina);
        scroll(top)
    }
});
const  peliculas = () =>{ axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&page=${pagina}`)
.then((respuesta) => {
    console.log(respuesta.data.results)
    respuesta.data.results.forEach(results => {
        
        titulos += `
        <div>
        <img src="https://image.tmdb.org/t/p/w500/${results.poster_path}">
        <h3 class="fs-5">${results.title}<h3>
        </div>
        `
        document.getElementById('contenedor').innerHTML = titulos;
    });
})
.catch((error) => {
    console.log(error)
})
}

peliculas();
