let peli = document.querySelector(".peli")
let history = document.querySelector(".history")
console.log(history);
let header = document.querySelector(".start")
const queryString = window.location.search
const url = new URLSearchParams(queryString)
const movie = url.get('i')
let apiKey = "dba7ba43"

const localFavoritos = JSON.parse(localStorage.getItem('favoritos')) || []


fetch(`http://www.omdbapi.com/?i=${movie}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        let history1 = document.createElement("div")
        history.innerHTML = `
            <div>
               <p> Year of release "${data.Released}"</p> 
               <p> Runtime "${data.Runtime}"</p>
               <p> Director  "${data.Director}"</p>
               <p> Plot "${data.Plot}"</p>
                <a class="favorito" href="/pages/favourites.html">favorito</a>
                <div class="home"><a href="/index.html"><button>home</button></a></div>
            </div>`
        history.append(history1)
        let title = document.createElement("h1")
        title.innerText = data.Title
        header.append(title)
        let pelie = document.createElement("div")
        pelie.innerHTML = ` 
               <div>
               <img src="${data.Poster}" alt="peli">
               
              </div>`
        peli.append(pelie)

        let favorito = document.querySelector(".favorito")
        favorito.addEventListener(`click`, () => {

            if (!localFavoritos.find(elementos => elementos.imdbID === data.imdbID)) {

                localFavoritos.push(data)
                localStorage.setItem('favoritos', JSON.stringify(localFavoritos))

            }
        })

    })


//  localFavoritos.find(elementos => elementos.imdbID === data.imdbID)
//  localFavoritos.map(elementos => )









