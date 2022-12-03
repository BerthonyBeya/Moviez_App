import "./MoviesGrid.scss";
import { useEffect, useState } from "react";

const MoviesGrid = (props) => {
  return (
    <div className="movies">
      <span>
        <div className="movies-font-container">
          <h1 className="movies-font-container__h1">{props.type}</h1>
        </div>
        <span></span>
      </span>
      <div className="movies-grid">
        <div className="movies-grid__movie">
          <img
            className="movies-grid__movie__img"
            src={""} // "images/Avengers.jpg"
            alt="img"
          />
        </div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
        <div className="movies-grid__movie"></div>
      </div>
    </div>
  );
};

export default MoviesGrid;
