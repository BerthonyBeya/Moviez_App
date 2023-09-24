import { Carousel } from "react-bootstrap";
import { FaStar, FaPlay, FaClipboardList } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import "./HomeCarousel.scss";

const HomeCarousel = (props) => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [nowPlayingTvShows, setNowPlayingTvShows] = useState([]);

  // Fetching Carousel data
  useEffect(() => {
    const searchHomeMovies = async () => {
      const homeMovieTitles = [
        "guardians of the galaxy volume 3",
        "Oppenheimer",
        "Fast",
        "Meg 2: The Trench",
      ];

      // Get home movies
      homeMovieTitles.forEach((movie) => {
        const fetchMovie = async () => {
          const result = await axios(
            `https://api.themoviedb.org/3/search/movie?api_key=770df377767ac6b055c68672f960c59f&query=${movie}&include_adult=false&language=en-US&page=1`
          );

          setHomeMovies((currentState) => {
            return [...currentState, result.data.results[0]];
          });
        };
        fetchMovie();
      });
    };

    // Get now playing movies
    const searchNowPlayingMovies = async () => {
      const nowPlayingMoviesTitles = [
        "Indiana Jones and the Dial of Destiny",
        "A Million Miles Away",
        "The Flash",
        "carl's date",
      ];

      nowPlayingMoviesTitles.forEach((movie) => {
        const fetchMovie = async () => {
          const result = await axios(
            `https://api.themoviedb.org/3/search/movie?api_key=770df377767ac6b055c68672f960c59f&query=${movie}&include_adult=false&language=en-US&page=1`
          );

          setNowPlayingMovies((currentState) => {
            return [...currentState, result.data.results[0]];
          });
        };

        fetchMovie();
      });
    };

    // Get now playing tv shows
    const searchNowPlayingTvShows = async () => {
      const nowPlayingTvShowsTitles = [
        "The challenge usa",
        "The winter king",
        "The wheel of time",
        "the chi",
      ];

      nowPlayingTvShowsTitles.forEach((show) => {
        const fetchShow = async () => {
          const result = await axios(
            `https://api.themoviedb.org/3/search/tv?api_key=770df377767ac6b055c68672f960c59f&query=${show}&include_adult=false&language=en-US&page=1`
          );

          setNowPlayingTvShows((currentState) => {
            return [...currentState, result.data.results[0]];
          });
        };

        fetchShow();
      });
    };

    searchHomeMovies();
    searchNowPlayingMovies();
    searchNowPlayingTvShows();
  }, []);

  

  const addingCarouselImages = () => {
    // Display this Carousel Infos if it's "HomePage"
    if (props.type === "homePage") {
      return homeMovies.map((movie) => {
        return (
          <Carousel.Item key={uuid()}>
            <img
              className="carousel__image"
              src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-movie">
              <h1 className="carousel-movie__title">{movie.original_title}</h1>
              <div className="carousel-movie-details">
                {/* <div className="carousel-movie-details__quality">
                  <div>
                    {" "}
                    <p>HD</p>
                  </div>
                </div> */}
                <p className="carousel-movie-details__rate">
                  <FaStar /> {movie.vote_average}
                </p>
                <p className="carousel-movie-details__release">
                  {movie.release_date}
                </p>
                <p className="/* carousel-movie__language */">
                  language: {movie.original_language}
                </p>
              </div>
              <p className="carousel-movie__bio">{movie.overview}</p>
              <div className="carousel-movie-buttons">
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
                <span>
                  <button className="carousel-movie-buttons__styling carousel-movie-buttons--add">
                    <p>
                      <FaClipboardList className="carousel-movie-buttons__heart__icon" />
                      Details
                    </p>
                  </button>
                </span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
    }

    // Display this carousel if it's "Now Playing Movies" Page
    if (props.type === "Now Playing Movies") {
      return nowPlayingMovies.map((movie) => {
        return (
          <Carousel.Item key={uuid()}>
            <img
              className="carousel__image"
              src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-movie">
              <h1 className="carousel-movie__title">{movie.original_title}</h1>
              <div className="carousel-movie-details">
                {/* <div className="carousel-movie-details__quality">
                  <div>
                    {" "}
                    <p>HD</p>
                  </div>
                </div> */}
                <p className="carousel-movie-details__rate">
                  <FaStar /> {movie.vote_average}
                </p>
                <p className="carousel-movie-details__release">
                  {movie.release_date}
                </p>
                <p className="/* carousel-movie__language */">
                  language: {movie.original_language}
                </p>
              </div>
              <p className="carousel-movie__bio">{movie.overview}</p>
              <div className="carousel-movie-buttons">
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
                <span>
                  <button className="carousel-movie-buttons__styling carousel-movie-buttons--add">
                    <p>
                      <FaClipboardList className="carousel-movie-buttons__heart__icon" />
                      Details
                    </p>
                  </button>
                </span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
    }

    // Display this carousel if it's "Now Playing Shows" Page
    if (props.type === "Now Playing Shows") {
      return nowPlayingTvShows.map((show) => {
        return (
          <Carousel.Item key={uuid()}>
            <img
              className="carousel__image"
              src={`https://image.tmdb.org/t/p/w780/${show.poster_path}`}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-movie">
              <h1 className="carousel-movie__title">{show.original_name}</h1>
              <div className="carousel-movie-details">
                {/* <div className="carousel-movie-details__quality">
                  <div>
                    {" "}
                    <p>HD</p>
                  </div>
                </div> */}
                <p className="carousel-movie-details__rate">
                  <FaStar /> {show.vote_average}
                </p>
                <p className="carousel-movie-details__release">
                  {show.first_air_date}
                </p>
                <p className="/* carousel-movie__language */">
                  language: {show.original_language}
                </p>
              </div>
              <p className="carousel-movie__bio">{show.overview}</p>
              <div className="carousel-movie-buttons">
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
                <span>
                  <button className="carousel-movie-buttons__styling carousel-movie-buttons--add">
                    <p>
                      <FaClipboardList className="carousel-movie-buttons__heart__icon" />
                      Details
                    </p>
                  </button>
                </span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__overlay"></div>
      <Carousel interval={2000} nextIcon={false} prevIcon={false}>
        {addingCarouselImages()}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;

// images/Avengers.jpg
// images/Dune.jpg
// images/Mando.jpg
// images/Theboys.jpg
