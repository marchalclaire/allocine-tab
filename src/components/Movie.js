import React, { useState, useEffect } from "react";
import axios from "axios";
import photo1 from "../images/slide-img-1.jpg";

const Movie = () => {
  return (
    <div class="slide">
      <img className="photo" src={photo1} />
      <div class="text">
        <h1>Ant-Man and the Wasp</h1>
        <h2>July 6, 2018</h2>
        <p>
          Scott Lang, cambrioleur de haut vol, va devoir apprendre à se
          comporter en héros et aider son mentor, le Dr Hank Pym, à protéger le
          secret de son spectaculaire costume d’Ant-Man, afin d’affronter une
          effroyable menace…{" "}
        </p>
      </div>
    </div>
  );
};

export default Movie;
