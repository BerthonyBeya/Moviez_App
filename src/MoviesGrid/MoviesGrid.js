import "./MoviesGrid.scss";
import { useSelector } from "react-redux";
import { FaStar, FaPlay, FaClipboardList } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";


const MoviesGrid = (props) => {
  // Geeting movies from redux
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
              return (
                <div className="movies-grid__movie">
                  <div className="movies-grid__quality">
                    <div>
                      {" "}
                      <p>HD</p>
                    </div>
                  </div>
                  <div className="movies-grid__overlay">
                    <div>
                      <button className="carousel-movie-buttons__styling carousel-movie-buttons--watch">
                        <p>
                          <FaPlay className="carousel-movie-buttons__watch__icon" />
                          Watch now
                        </p>
                      </button>
                    </div>
                    <div>
                      <button className="carousel-movie-buttons__styling carousel-movie-buttons--add">
                        <p>
                          <AiOutlineHeart className="carousel-movie-buttons__heart__icon" />
                          Add to list
                        </p>
                      </button>
                    </div>
                    <div>
                      <button className="carousel-movie-buttons__styling carousel-movie-buttons--add">
                        <p>
                          <FaClipboardList className="carousel-movie-buttons__heart__icon" />
                          Details
                        </p>
                      </button>
                    </div>
                  </div>
                  <img
                    className="movies-grid__movie__img"
                    src={el.Poster}
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
