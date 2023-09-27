import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaPlay, FaClipboardList } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./DetailsComponent.scss";

// "Movie" gardians of the galaxy      id:447365
// "Show"  The Challenge: USA          id:203423

const DetailsComponent = () => {
  const [movieDetails, setMovieDetails] = useState(
    "Movie details state is empty"
  );
  const [showDetails, setShowDetails] = useState(
    "Tv Show details state is empty"
  );

  useEffect(() => {
    const fetchSearchedData = async () => {
      const movie = `https://api.themoviedb.org/3/movie/${"447365"}?api_key=${"770df377767ac6b055c68672f960c59f"}`;
      const tv = `https://api.themoviedb.org/3/tv/${"203423"}?api_key=${"770df377767ac6b055c68672f960c59f"}`;

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

  console.log(movieDetails);
  console.log(showDetails);

  return (
    <>
      <Navbar />
      <div className="details-container">
        <div className="details">
          <div>
            <img
              className="details__poster"
              src="/images/image.jpg"
              alt="img"
            />
          </div>
          <div className="details-infos">
            <h1 className="details-infos__Title">
              <span>Title:&nbsp;</span> Avengers
            </h1>
            <ul>
              <li className="details-infos__more">
                <span>Release date:&nbsp;</span> 250000000
              </li>
              <li className="details-infos__more">
                <span>Revenue:&nbsp;</span> 845430302
              </li>
              <li className="details-infos__more">
                <span>Original language:&nbsp;</span> en
              </li>
              <li className="details-infos__more">
                <span>Budget:&nbsp;</span> 250000000
              </li>
              <li className="details-infos__more">
                <span>Status:&nbsp;</span> Released
              </li>
              <li className="details-infos__more">
                <span>Genres:&nbsp;</span> Science Fiction, Adventure, Action
              </li>
            </ul>
            <div className="carousel-movie-buttons details--buttons">
              <span>
                <button
                  className="carousel-movie-buttons__styling carousel-movie-buttons--watch"
                  onClick={""}
                >
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
        <div className="overview">
          <span>Overview:</span>
          <p>
            Peter Quill, still reeling from the loss of Gamora, must rally his
            team around him to defend the universe along... Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Error dolorum repudiandae
            aspernatur distinctio similique, sint eos totam vero nam ipsum?
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailsComponent;
