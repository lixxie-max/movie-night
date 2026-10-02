// =========================
// MOVIE DATA
// =========================

const movies = [
    {
        title: "10 Things I Hate About You",
        genre: "romance",
        year: 1999,
        rating: 7.3,
        poster: "/10things.jpg",
        description: "A funny high-school romance filled with sarcasm, friendship, and unexpected feelings."
    },

    {
        title: "The Notebook",
        genre: "romance",
        year: 2004,
        rating: 7.8,
        poster: "/notebook.jpg",
        description: "A touching story about two people whose love continues through changing circumstances."
    },

    {
        title: "Pride & Prejudice",
        genre: "drama",
        year: 2005,
        rating: 7.8,
        poster: "/pride.jpg",
        description: "Elizabeth Bennet and Mr. Darcy navigate misunderstandings, family expectations, and love."
    },

    {
        title: "Atonement",
        genre: "drama",
        year: 2007,
        rating: 7.8,
        poster: "/atonement.jpg",
        description: "A dramatic story of love, misunderstanding, guilt, and the consequences of one mistake."
    },

    {
        title: "Interstellar",
        genre: "sci-fi",
        year: 2014,
        rating: 8.7,
        poster: "/interstellar.jpg",
        description: "A group of explorers travels through space in search of a new home for humanity."
    }
];


// =========================
// DISPLAY MOVIES
// =========================

const movieContainer = document.getElementById("movieContainer");

function displayMovies(movieList) {

    movieContainer.innerHTML = "";

    movieList.forEach(function(movie) {

        const movieCard = document.createElement("div");

        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img 
                src="${movie.poster}" 
                alt="${movie.title}"
                class="movie-poster"
            >

            <div class="movie-info">

                <h3 class="movie-title">
                    ${movie.title}
                </h3>

                <p class="movie-meta">
                    ${movie.genre} • ${movie.year}
                </p>

                <p class="movie-description">
                    ${movie.description}
                </p>

                <span class="rating">
                    ⭐ ${movie.rating}
                </span>

            </div>
        `;

        // Open popup when card is clicked
        movieCard.addEventListener("click", function() {
            openModal(movie);
        });

        movieContainer.appendChild(movieCard);
    });
}


// =========================
// SHOW MOVIES
// =========================

displayMovies(movies);
// =========================
// SEARCH + GENRE FILTER
// =========================

const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const sortMovies = document.getElementById("sortMovies");

function filterMovies() {

    const searchText = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;
    const selectedSort = sortMovies.value;

    let filteredMovies = movies.filter(function(movie) {

        const matchesSearch =
            movie.title.toLowerCase().includes(searchText);

        const matchesGenre =
            selectedGenre === "all" ||
            movie.genre === selectedGenre;

        return matchesSearch && matchesGenre;
    });


    // Sort by highest rating
    if (selectedSort === "rating") {

        filteredMovies.sort(function(a, b) {
            return b.rating - a.rating;
        });

    }


    displayMovies(filteredMovies);
}


// When user types
searchInput.addEventListener("input", filterMovies);


// When user changes genre
genreFilter.addEventListener("change", filterMovies);
sortMovies.addEventListener("change", filterMovies);
// =========================
// MOVIE POPUP
// =========================

const movieModal = document.getElementById("movieModal");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalGenre = document.getElementById("modalGenre");
const modalRating = document.getElementById("modalRating");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");


function openModal(movie) {

    modalPoster.src = movie.poster;
    modalTitle.textContent = movie.title;
    modalGenre.textContent = movie.genre + " • " + movie.year;
    modalRating.textContent = "⭐ " + movie.rating;
    modalDescription.textContent = movie.description;

    movieModal.classList.add("show");
}


// Close popup
closeModal.addEventListener("click", function() {

    movieModal.classList.remove("show");

});