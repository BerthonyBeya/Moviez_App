import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
/* import { useNavigate } from "react-router-dom"; */
import { AiOutlineHeart } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import "./DetailsComponent.scss";

// "Movie" gardians of the galaxy      id:447365
// "Show"  The Challenge: USA          id:203423

const DetailsComponent = () => {
  const { id, type } = useParams();

  const [movieDetails, setMovieDetails] = useState(
    "Movie details state is empty"
  );
  const [showDetails, setShowDetails] = useState(
    "Tv Show details state is empty"
  );

  /* const navigate = useNavigate(); */

  // GO to the video route
  /* const goToVideo = () => {
    navigate(`/video/${id}/${type}`);
  }; */

  useEffect(() => {
    const fetchSearchedData = async () => {
      // If it's a movie, fetch the movie infos
      if (type === "movie") {
        const movie = await axios(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        // If the status is "fulfilled", add the movie infos to the state
        if (movie?.status === 200) {
          setMovieDetails(movie);
        }
      }

      // If it's a show, fetch the show infos
      if (type === "tv") {
        const show = await axios(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        // If the status is "fulfilled", add the show infos to the state
        if (show?.status === 200) {
          setShowDetails(show);
        }
      }
    };

    fetchSearchedData();
  }, [id, type]);

  return (
    <>
      <Navbar />
      <div className="details-container">
        {/* /* If both Api fail, show loader*/}
        {typeof movieDetails !== "object" && typeof showDetails !== "object" ? (
          <LoaderComponent />
        ) : (
          ""
        )}
        {/* If the movie state is an onject then show this */}
        {typeof movieDetails === "object" ? (
          <div className="details">
            <div>
              <img
                className="details__poster"
                src={`https://image.tmdb.org/t/p/w780/${movieDetails?.data?.poster_path}`}
                alt="img"
              />
            </div>
            <div className="details-infos">
              <h1 className="details-infos__Title">
                <span>Title:&nbsp;</span> {movieDetails?.data?.title}
              </h1>
              <ul>
                <li className="details-infos__more">
                  <span>Release date:&nbsp;</span>{" "}
                  {movieDetails?.data?.release_date}
                </li>
                <li className="details-infos__more">
                  <span>Revenue:&nbsp;</span> {movieDetails?.data?.revenue}
                </li>
                <li className="details-infos__more">
                  <span>Original language:&nbsp;</span>{" "}
                  {movieDetails?.data?.original_language}
                </li>
                <li className="details-infos__more">
                  <span>Budget:&nbsp;</span> {movieDetails?.data?.budget}
                </li>
                <li className="details-infos__more">
                  <span>Status:&nbsp;</span> {movieDetails?.data?.status}
                </li>
                <li className="details-infos__more">
                  <span>Genres:&nbsp;</span>{" "}
                  {movieDetails?.data?.genres?.map((el) => {
                    return el.name + ", ";
                  })}
                </li>
              </ul>
              <div className="carousel-movie-buttons details--buttons">
                <a
                  href={`https://www.themoviedb.org/${type}/${id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span /* onClick={goToVideo} */>
                    <button className="carousel-movie-buttons__styling carousel-movie-buttons--watch">
                      <p>
                        <FaPlay className="carousel-movie-buttons__watch__icon" />
                        Watch now
                      </p>
                    </button>
                  </span>
                </a>

                <span>
                  <button className="carousel-movie-buttons__styling carousel-movie-buttons--add">
                    <p>
                      <AiOutlineHeart className="carousel-movie-buttons__heart__icon" />
                      Add to list
                    </p>
                  </button>
                </span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {typeof movieDetails === "object" ? (
          <div className="overview">
            <span>Overview:</span>
            <p>{movieDetails?.data?.overview}</p>
          </div>
        ) : (
          ""
        )}

        {/* If the tv show state is an onject then show this */}
        {typeof showDetails === "object" ? (
          <div className="details">
            <img
              className="details__poster"
              src={`https://image.tmdb.org/t/p/w780/${showDetails?.data?.poster_path}`}
              alt="img"
            />

            <div className="details-infos">
              <h1 className="details-infos__Title">
                <span>Title:&nbsp;</span> {showDetails?.data?.original_name}
              </h1>
              <ul>
                <li className="details-infos__more">
                  <span>First air date :&nbsp;</span>{" "}
                  {showDetails?.data?.first_air_date}
                </li>
                <li className="details-infos__more">
                  <span>Network:&nbsp;</span>{" "}
                  {showDetails?.data?.networks?.map((network) => {
                    return network.name + ", ";
                  })}
                </li>
                <li className="details-infos__more">
                  <span>Language:&nbsp;</span>{" "}
                  {showDetails?.data?.languages.map((language) => {
                    return language + ", ";
                  })}
                </li>
                <li className="details-infos__more">
                  <span>Seasons:&nbsp;</span>{" "}
                  {showDetails?.data?.seasons.length + " Seasons"}
                </li>
                <li className="details-infos__more">
                  <span>Status:&nbsp;</span> {showDetails?.data?.status}
                </li>
                <li className="details-infos__more">
                  <span>Genres:&nbsp;</span>{" "}
                  {showDetails?.data?.genres.map((genre) => {
                    return genre.name + ", ";
                  })}
                </li>
              </ul>
              <div className="carousel-movie-buttons details--buttons">
                <a
                  href={`https://www.themoviedb.org/${type}/${id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span /* onClick={goToVideo} */>
                    <button className="carousel-movie-buttons__styling carousel-movie-buttons--watch">
                      <p>
                        <FaPlay className="carousel-movie-buttons__watch__icon" />
                        Watch now
                      </p>
                    </button>
                  </span>
                </a>

                <span>
                  <button className="carousel-movie-buttons__styling carousel-movie-buttons--add">
                    <p>
                      <AiOutlineHeart className="carousel-movie-buttons__heart__icon" />
                      Add to list
                    </p>
                  </button>
                </span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {typeof showDetails === "object" ? (
          <div className="overview">
            <span>Overview:</span>
            <p>{showDetails?.data?.overview}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* If both Api fail, show this footer*/}
      {typeof movieDetails !== "object" && typeof showDetails !== "object" ? (
        <div className="details-container__footer">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </>
  );
};

export default DetailsComponent;
