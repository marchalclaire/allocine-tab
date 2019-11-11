import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie.js";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieType, setMovieType] = useState("popular");

  const fetchData = async () => {
    const response = await axios.get(
      "https://api-allocine.herokuapp.com/api/movies/" + movieType
    );
    //console.log(response.data.results);
    setMovies(response.data.results);
  };

  useEffect(() => {
    //par défaut au démarrage de la page : afficher les films de la catégorie "popular".
    fetchData();
  }, [movieType]);

  return (
    <>
      <div className="header">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/fr/3/35/Allocin%C3%A9_Logo.svg"
          alt="logo"
        ></img>
      </div>
      <div className="Nav">
        <div className="titles">
          <span
            className={movieType === "popular" ? "title selected" : "title"}
            onClick={event => {
              setMovieType("popular");
            }}
          >
            Popular Movies
          </span>
          <span
            className={movieType === "upcoming" ? "title selected" : "title"}
            onClick={event => {
              setMovieType("upcoming");
            }}
          >
            Upcoming Movies
          </span>
          <span
            className={movieType === "top_rated" ? "title selected" : "title"}
            onClick={event => {
              setMovieType("top_rated");
            }}
          >
            Top Rated Movies
          </span>
        </div>
      </div>
      <div className="container-movies">
        {movies.map((movie, index) => {
          return (
            <Movie
              //on crée une clé unique pour chaque élément de la liste movies (nom au choix unique), la clé est égale à chaque tour de boucle du composant.
              key={"movieItem" + index}
              //photo={movies[index].poster_path} = (movie = movies[index])
              photo={movie.poster_path}
              //title={movies[index].title}
              title={movie.title}
              date={movie.release_date}
              // script={movies[index].overview}
              script={movie.overview}
            ></Movie>
          );
        })}
      </div>
    </>
  );
};

export default App;
