import "./MoviesGrid.scss";
import MoviesBox from "./MovieBox/MoviesBox";
import { useSelector } from "react-redux";

const MoviesGrid = (props) => {
  const movies = useSelector((state) => {
    return state.movies.value;
  });
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
              return <MoviesBox poster={el.Poster} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default MoviesGrid;
