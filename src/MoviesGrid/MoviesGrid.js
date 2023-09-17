import "./MoviesGrid.scss";
import MoviesBox from "./MovieBox/MoviesBox";
import NotFound from "../NotFound/NotFound";
import { useSelector } from "react-redux";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

const MoviesGrid = (props) => {
  // Fetching Movies from the redux
  const movies = useSelector((state) => {
    return state.movies.value;
  });

  // Fetching Tv Shows from the redux
  const shows = useSelector((state) => {
    return state.shows.value;
  });

  console.log(movies);

  // Checking which type of movies or tv shows to display
  const renderMovies = () => {
    switch (props.type) {
      case "Upcoming Movies":
        return renderMovieGrid(movies.upcomingMovies, props.type);
      case "Now Playing Movies":
        return renderMovieGrid(movies.nowPlaying, props.type);
      case "Now Playing Shows":
        return renderMovieGrid(shows.showsOnAir, props.type);
      case "Popular TV Shows":
        return renderMovieGrid(shows.popularTvShows, props.type);
      case "Favorites":
        return renderMovieGrid([], props.type);

      default:
        return <NotFound type={"404 Page"} />;
    }
  };

  // <NotFound type={"404 Page"} />

  // Rendering specific movies or tv shows
  const renderMovieGrid = (moviesArray, type) => {
    return moviesArray?.length !== 0 ? (
      <div className="movies-grid">
        {moviesArray?.map((el) => {
          return (
            <MoviesBox
              rating={el.vote_average}
              poster={el.poster_path}
              key={el.id}
            />
          );
        })}
      </div>
    ) : type === "Favorites" ? (
      <NotFound type={"Favorites"} />
    ) : (
      <LoaderComponent />
    );
  };

  return (
    <div className="movies-container">
      <div className="movies">
        <span>
          <div className="movies-font-container">
            <h1 className="movies-font-container__h1">{props.type}</h1>
          </div>
          <span></span>
        </span>
        {renderMovies()}
      </div>
    </div>
  );
};

export default MoviesGrid;
