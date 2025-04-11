window.addEventListener('load', async() => {
   const movies= await getdata();

   const genres = [...new Set(movies.map((movie) => movie.genre))];

    genres.forEach((genre) => {
       const li = document.createElement("li");
       li.textContent = genre;
       li.addEventListener("click", () => displayMovies(genre));
    genreList.appendChild(li);
      });
  });

const genreList = document.getElementById("genre-list");
const moviesContainer = document.getElementById("movies-container");
const searchInput = document.getElementById("search-input");



async function displayMovies(genreFilter = null, searchQuery = null) {
    const movies= await getdata();

    moviesContainer.innerHTML = "";
    const filteredMovies = movies.filter((movie) => {
        if (genreFilter && movie.genre !== genreFilter) {
            return false;
        }
        if (searchQuery && !movie.title.toLowerCase().includes(searchQuery.toLowerCase())){
          return false;
        }
        return true;
    });

    filteredMovies.forEach((movie) => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Rating: ${movie.rating}</p>
            <p>Year: ${movie.year}</p>
        `;
        moviesContainer.appendChild(movieDiv);
    });
}

displayMovies();

searchInput.addEventListener("input", ()=>{
  displayMovies(null, searchInput.value);
});


