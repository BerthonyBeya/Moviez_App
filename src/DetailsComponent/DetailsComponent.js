import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import "./DetailsComponent.scss";

// "Movie" gardians of the galaxy      id:447365
// "Show"  The Challenge: USA          id:203423

const DetailsComponent = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(
    "Movie details state is empty"
  );
  const [showDetails, setShowDetails] = useState(
    "Tv Show details state is empty"
  );

  useEffect(() => {
    const fetchSearchedData = async () => {
      const movie = `https://api.themoviedb.org/3/movie/${id}?api_key=${"770df377767ac6b055c68672f960c59f"}`;
      const tv = `https://api.themoviedb.org/3/tv/${id}?api_key=${"770df377767ac6b055c68672f960c59f"}`;

      // Fetching for the searched data
      const [movieResponse, showResponse] = await Promise.allSettled(
        [movie, tv].map((data) => {
          return axios(data);
        })
      );

      // If it's a movie details add it here
      if (movieResponse?.status === "fulfilled") {
        setMovieDetails(movieResponse.value);
      }

      // If it's a show details add it here
      if (showResponse?.status === "fulfilled") {
        setShowDetails(showResponse.value);
      }
    };

    fetchSearchedData();
  }, []);

  return (
    <>
    
      <Navbar />
      <div className="details-container">
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
                <span>
                  <button className="carousel-movie-buttons__styling carousel-movie-buttons--watch">
                    <p>
                      <FaPlay className="carousel-movie-buttons__watch__icon" />
                      Watch now
                    </p>
                  </button>
                </span>
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
                <span>
                  <button className="carousel-movie-buttons__styling carousel-movie-buttons--watch">
                    <p>
                      <FaPlay className="carousel-movie-buttons__watch__icon" />
                      Watch now
                    </p>
                  </button>
                </span>
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
      <Footer />
    </>
  );
};

export default DetailsComponent;
