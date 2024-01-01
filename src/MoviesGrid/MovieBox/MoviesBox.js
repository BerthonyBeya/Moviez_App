import "../MoviesGrid.scss";
import { FaPlay, FaClipboardList } from "react-icons/fa";
/* import { AiOutlineHeart } from "react-icons/ai"; */
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MoviesBox = (props) => {
  const navigate = useNavigate();

  // LocalStorage
  const [storage, setStorage] = useState([]);
  localStorage.setItem("favorites", JSON.stringify(storage));

  // Navigating to movies or shows details page
  const detailsHandler = () => {
    navigate(`/details/${props.id}/${props.type}`);
  };

  // GO to the video route
  /* const goToVideo = () => {
    navigate(`/video/${props.id}/${props.type}`);
  }; */

  // Add Favorite
  /* const favoriteHandler = () => {
    setStorage((currentState) => {
      return [...currentState, props.forStorage];
    });
  }; */

  return (
    <div className="movies-grid__movie">
      <div className="movies-grid__quality">
        <div>
          {" "}
          <p>{props.rating}</p>
        </div>
      </div>
      <div className="movies-grid__overlay">
        <div>
          <a
            href={`https://www.themoviedb.org/${props.type}/${props.id}`}
            target="_blank"
            rel="noreferrer"
          >
            <button
              /* onClick={goToVideo} */
              className="carousel-movie-buttons__styling carousel-movie-buttons--watch"
            >
              <p>
                <FaPlay className="carousel-movie-buttons__watch__icon" />
                Watch now
              </p>
            </button>
          </a>
        </div>
        {/* <div>
          <button
            className="carousel-movie-buttons__styling carousel-movie-buttons--add"
            onClick={favoriteHandler}
          >
            <p>
              <AiOutlineHeart className="carousel-movie-buttons__heart__icon" />
              Add to list
            </p>
          </button>
        </div> */}
        <div>
          <button
            className="carousel-movie-buttons__styling carousel-movie-buttons--add"
            onClick={detailsHandler}
          >
            <p>
              <FaClipboardList className="carousel-movie-buttons__heart__icon" />
              Details
            </p>
          </button>
        </div>
      </div>
      <img
        className="movies-grid__movie__img"
        src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
        alt="img"
      />
    </div>
  );
};

export default MoviesBox;
