const contentBlock = document.querySelector(".content-block");
const rateWindow = document.querySelector(".rate__window");
const rateInput = document.querySelector(".rate-input");
const rateBtn = document.querySelector(".rate-btn");

const movies = [
  {
    id: 1,
    title: "Guardians of the Galaxy Vol. 3",
    genre: ["drama", "comedy", "adventure"],
    description:
      "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.",
    actors: [
      {
        name: "Chris Pratt",
        birthyear: 1979,
        country: "USA",
      },
      {
        name: "Bradley Cooper",
        birthyear: 1975,
        country: "USA",
      },
      {
        name: "Zoe Saldana",
        birthyear: 1978,
        country: "Mexico",
      },
    ],
    similar: ["Plane", "Sharper"],
    rating: 8.4,
  },
  {
    id: 2,
    title: "Plane",
    genre: ["thriller", "crime", "adventure"],
    description:
      "Pilot Brodie Torrance saves passengers from a lightning strike by making a risky landing on a war-torn island -- only to find that surviving the landing was just the beginning. When dangerous rebels take most of the passengers hostage, the only person Torrance can count on for help is Louis Gaspare, an accused murderer who was being transported by the FBI.",
    actors: [
      {
        name: "Gerard Butler",
        birthyear: 1969,
        country: "Scotland",
      },
      {
        name: "Mike Colter",
        birthyear: 1976,
        country: "USA",
      },
      {
        name: "Lilly Krug",
        birthyear: 2001,
        country: "Germany",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Sharper"],
    rating: 6.1,
  },
  {
    id: 3,
    title: "Sharper",
    genre: ["drama", "thriller", "crime"],
    description:
      "Motivations are suspect, and expectations are turned upside down, as a con artist takes on Manhattan billionaires.",
    actors: [
      {
        name: "Julianne Moore",
        birthyear: 1960,
        country: "United Kingdom",
      },
      {
        name: "Sebastian Stan",
        birthyear: 1982,
        country: "Romania",
      },
      {
        name: "Briana Middleton",
        birthyear: null,
        country: "USA",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Plane"],
    rating: 3.3,
  },
];

const movieGenresArr = [
  {
    name: "Thriller",
    movies: ["Plane", "Sharper"],
  },
  {
    name: "Adventure",
    movies: ["Guardians of the Galaxy Vol. 3", "Plane"],
  },
  {
    name: "Drama",
    movies: ["Guardians of the Galaxy Vol. 3", "Sharper"],
  },
  {
    name: "Crime",
    movies: ["Plane", "Sharper"],
  },
  {
    name: "Comedy",
    movies: ["Guardians of the Galaxy Vol. 3"],
  },
];

const moviesArr = JSON.parse(JSON.stringify(movies));

moviesArr.forEach((movie) => {
  movie.actors.forEach((actor) => {
    actor.age = new Date().getFullYear() - actor.birthyear;
  });
});

movieGenresArr.forEach((el) => moviesArr.push(el));

console.log(moviesArr);

const getImage = (person) => {
  const value = person.toLowerCase();

  switch (value) {
    case "chris pratt":
      return "pratt.jpg";
    case "bradley cooper":
      return "cooper.jpg";
    case "zoe saldana":
      return "saldana.jpg";
    case "gerard butler":
      return "butler.jpg";
    case "mike colter":
      return "cotler.jpg";
    case "lilly krug":
      return "krug.jpg";
    case "julianne moore":
      return "moore.jpg";
    case "sebastian stan":
      return "stan.jpg";
    case "briana middleton":
      return "middleton.jpg";
    case "guardians of the galaxy vol. 3":
      return "1.jpg";
    case "plane":
      return "2.jpg";
    case "sharper":
      return "3.jpg";
    default:
      return "cooper.jpg";
  }
};

function getMovies(id) {
  moviesArr.filter((movie) => {
    if (movie.id === id) {
      contentBlock.innerHTML = `
              <div class="movie-essentials__container">
                        <h2 class="content-block__movie-name">${movie.title}</h2>
                        <div class="content-block__movie-rating_container">
                          <div class="content-block__movie-rating_text">Rating:</div>
                          <div class="content-block__movie-rating_number">${movie.rating}</div>
                          <div class="content-block__movie-rating_of10">/ 10</div>
                        </div>
                      </div>
                      <div class="movie-main__content_container">
                        <img class="movie-main__content_poster">
                        <div class="movie__description_container">
                          <div class="movie__description">${movie.description}</div>
                          <div class="movie__genre_container"></div>
                          <p class="actors-cast__text">Cast:</p>
                          <div class="movie-cast__container">
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 class="similar-movies__text">Similar movies</h3>
                      <div class="similar-movies__container"></div>
              `;

      let movieMainContentPoster = document.querySelector(
        ".movie-main__content_poster"
      );
      movieMainContentPoster.src = `./images/${getImage(movie.title)}`;

      movie.genre.forEach((genre) => {
        let movieGenreContainer = document.querySelector(
          ".movie__genre_container"
        );
        let movieGenre = document.createElement("div");

        movieGenre.className = "movie__genre";
        movieGenreContainer.appendChild(movieGenre);

        movieGenre.innerText = genre;
      });

      movie.actors.forEach((actor) => {
        let movieCastContainer = document.querySelector(
          ".movie-cast__container"
        );
        let movieActorContainer = document.createElement("div");
        let movieActorName = document.createElement("p");
        let movieActorPic = document.createElement("img");

        movieActorContainer.className = "movie-actor__container";
        movieActorName.className = "movie-actor__name";
        movieActorPic.className = "movie-actor__pic";

        movieCastContainer.appendChild(movieActorContainer);
        movieActorContainer.appendChild(movieActorPic);
        movieActorContainer.appendChild(movieActorName);

        movieActorName.innerText = actor.name;
        movieActorPic.src = `./images/actors/${getImage(actor.name)}`;
      });

      movie.similar.forEach((sim) => {
        let similarMoviesContainer = document.querySelector(
          ".similar-movies__container"
        );
        let similarMoviePic = document.createElement("img");

        similarMoviePic.className = "similar-movie__pic";
        similarMoviesContainer.appendChild(similarMoviePic);

        similarMoviePic.src = `./images/${getImage(sim)}`;
      });

      const contentBlockMovieRatingNumber = document.querySelector(
        ".content-block__movie-rating_number"
      );

      const getRatingColor = () => {
        if (contentBlockMovieRatingNumber.innerText <= 5) {
          contentBlockMovieRatingNumber.style.color = "red";
        } else if (contentBlockMovieRatingNumber.innerText <= 8) {
          contentBlockMovieRatingNumber.style.color = "yellow";
        } else if (contentBlockMovieRatingNumber.innerText <= 10) {
          contentBlockMovieRatingNumber.style.color = "green";
        }
      };

      contentBlockMovieRatingNumber.addEventListener("mouseover", () => {
        rateWindow.classList.toggle("rate__window-visible");
      });

      getRatingColor();

      rateBtn.addEventListener("click", (e) => {
        if (+rateInput.value > 10 || +rateInput.value.length > 2) {
          alert("Оценка должна быть от 0 до 10!");
          e.preventDefault();
          rateInput.value = "";
        } else {
          contentBlockMovieRatingNumber.innerText = `${
            (+rateInput.value + movie.rating) / 2
          } `;
          rateInput.value = "";

          e.preventDefault();
          getRatingColor();
        }
      });
    }
  });
}

getMovies(2);
