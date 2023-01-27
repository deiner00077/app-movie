let container = document.querySelector(".start")
let list = document.querySelector(".favorit")


let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
console.log(favoritos);

favoritos.forEach(e => { 
    let lista = document.createElement("div")
    lista.innerHTML = ` 
          <div>
              <h2 class=>"${e.Title}"</h2>
              <img class="posts" src="${e.Poster}" alt="img">
              <h3 class="years">"${e.Year}"</h3>
              <a href="/pages/movie.html?i=${e.imdbID}"><button class="mass">Mas informacion</button></a>
          </div>`

  list.append(lista);

});
  









// favoritos.forEach(e => {
//     let lista = document.createElement('div')
//     list.innerHTML = ` 
//             <div>
//               <h2 class=>"${e.Title}"</h2>
//               <img class="posts" src="${e.Poster}" alt="img">
//               <h3 class="years">"${e.Year}"</h3>
//               <a href="/pages/movie.html?i=${e.imdbID}"><button class="mass">Mas informacion</button></a>
//               <button class ="eliminar"> Eliminar</button>
//             </div>`
      
    
//        list.append(lista)
// });



// hacer evento de click en el boton de eliminar
// la tarea es que lo borre del dom y del local Storage

