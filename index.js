const movieTitle = document.getElementById("title");
const movieYear = document.getElementById("year");
const movieRating = document.getElementById("rated");
const movieRelease = document.getElementById("released");
const movieRuntime = document.getElementById("runtime");
const movieDirector = document.getElementById("director");
const fetchBtn = document.getElementById("data-fetch-btn");
const searchInput = document.getElementById("search-input");

async function logMovies() {
    const response = await fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=${apikey}&`);
    let movies = await response.json() // parsing the fetch data into json readale format
    movieTitle.textContent = `Title: ${movies.Title}`;
    movieYear.textContent  = `Year: ${movies.Year}`;
    movieRating.textContent = `Rating: ${movies.Rated}`;
    movieRelease.textContent = `Release: ${movies.Released}`;
    movieRuntime.textContent = `Runtime: ${movies.Runtime}`;
    movieDirector.textContent = `Director: ${movies.Director}`;
}



fetchBtn.addEventListener("click", () => {
    logMovies()
});