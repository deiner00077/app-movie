
let containerMovies = document.querySelector(".containerMovies")
let apiKey = "dba7ba43"
const form = document.querySelector("form");
let input = document.querySelector("#movie")
let info = document.querySelector(".info");


const getInputValue = () => input.value

form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`http://www.omdbapi.com/?s=${getInputValue()}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => data.Search.forEach(e => {
            let post = document.createElement("div")
            post.innerHTML = ` 
                    <div>
                        <h2 class=>"${e.Title}"</h2>
                        <img class="posts" src="${e.Poster}" alt="img">
                        <h3 class="years">"${e.Year}"</h3>
                        <a href="/pages/movie.html?i=${e.imdbID}"><button class="mass">Mas informacion</button></a>
                    </div>`

            containerMovies.append(post)
        }))


});












