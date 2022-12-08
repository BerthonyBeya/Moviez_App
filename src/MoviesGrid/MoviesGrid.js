import "./MoviesGrid.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MoviesGrid = (props) => {
  // Geeting movies from redux
  const movies = useSelector((state) => {
    return state.movies.value;
  });

  movies?.movies
    ? movies.movies.forEach((el) => {
        console.log(el.Poster);
      })
    : console.log("Nothing");

  return (
    <div className="movies">
      <span>
        <div className="movies-font-container">
          <h1 className="movies-font-container__h1">{props.type}</h1>
        </div>
        <span></span>
      </span>
      <div className="movies-grid">
        {movies?.movies
          ? movies.movies.map((el) => {
              return (
                <div className="movies-grid__movie">
                  <img
                    className="movies-grid__movie__img"
                    src={el.Poster} // "images/Avengers.jpg"
                    alt="img"
                  />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default MoviesGrid;
