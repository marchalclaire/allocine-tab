import React from "react";

const Movie = props => {
  const photo = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
  return (
    <div className="slide">
      <img
        className="photo"
        src={photo + props.photo}
        alt={photo + props.photo}
      />
      <div className="text">
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <p>{props.script}</p>
      </div>
    </div>
  );
};

export default Movie;
