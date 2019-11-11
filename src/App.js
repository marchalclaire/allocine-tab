import React, { useState, useEffect } from "react";

import axios from "axios";
import Movie from "./components/Movie.js";
import "./App.css";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const fetchdata = async () => {
    const response = await axios.get(
      "https://api-allocine.herokuapp.com/api/movies/popular"
    );
    setPopularMovies(response.data.results[0].title);
  };

  return (
    <>
      <div className="header">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/fr/3/35/Allocin%C3%A9_Logo.svg"
        ></img>
      </div>
      <div className="Nav">
        <div className="titles">
          <span
            className="title"
            // onClick={event => {
            //   const newPopularMovies = [...popularMovies];
            //   newPopularMovies.push({ fetchdata });
            //   setPopularMovies(newPopularMovies);
            // }}
          >
            Popular Movies
          </span>
          <span className="title">Upcoming Movies</span>
          <span className="title">Top Rated Movies</span>
        </div>
      </div>
      <div className="container-movies">
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
      </div>
    </>
  );
};

export default App;
