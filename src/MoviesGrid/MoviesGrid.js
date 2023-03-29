import "./MoviesGrid.scss";
import MoviesBox from "./MovieBox/MoviesBox";
import NotFound from "../NotFound/NotFound";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { Container } from "react-bootstrap";

const MoviesGrid = (props) => {
  const movies = useSelector((state) => {
    return state.movies.value;
  });

  console.log(movies);

  return (
    <div className="movies-container">
      <div className="movies">
        <span>
          <div className="movies-font-container">
            <h1 className="movies-font-container__h1">{props.type}</h1>
          </div>
          <span></span>
        </span>
        {movies?.upcomingMovies?.length !== 0 ? (
          <div className="movies-grid">
            {/* Display upcoming movies */}
            {movies?.upcomingMovies?.map((el) => {
              return <MoviesBox poster={el.poster_path} key={uuid()} />;
            })}
          </div>
        ) : (
          <NotFound type={"Movies"} />
        )}
      </div>
    </div>
  );
};

export default MoviesGrid;
