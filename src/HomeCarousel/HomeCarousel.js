import "./HomeCarousel.scss";
import { Carousel } from "react-bootstrap";
import { FaStar, FaPlay, FaClipboardList } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const HomeCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__overlay"></div>
      <Carousel interval={2000} nextIcon={false} prevIcon={false}>
        <Carousel.Item>
          <img
            className="carousel__image"
            src="images/Avengers.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-movie">
            <h1 className="carousel-movie__title">Avengers: Endgame</h1>
            <div className="carousel-movie-details">
              <div className="carousel-movie-details__quality">
                <div>
                  {" "}
                  <p>HD</p>
                </div>
              </div>
              <p className="carousel-movie-details__rate">
                <FaStar /> 8.30
              </p>
              <p className="carousel-movie-details__minutes">148 min</p>
              <p className="carousel-movie__type">Action</p>
            </div>
            <p className="carousel-movie__bio">
              After half of all life is snapped away by Thanos, the Avengers are
              left scattered and divided. Now with a way to reverse the damage,
              the Avengers and their allies must assemble once more and learn to
              put differences aside in order to work together.....
            </p>
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
        <Carousel.Item>
          <img
            className="carousel__image"
            src="images/Dune.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-movie">
            <h1 className="carousel-movie__title">Dune</h1>
            <div className="carousel-movie-details">
              <div className="carousel-movie-details__quality">
                <div>
                  {" "}
                  <p>HD</p>
                </div>
              </div>
              <p className="carousel-movie-details__rate">
                <FaStar /> 8.30
              </p>
              <p className="carousel-movie-details__minutes">148 min</p>
              <p className="carousel-movie__type">Action</p>
            </div>
            <p className="carousel-movie__bio">
              After half of all life is snapped away by Thanos, the Avengers are
              left scattered and divided. Now with a way to reverse the damage,
              the Avengers and their allies must assemble once more and learn to
              put differences aside in order to work together.....
            </p>
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
        <Carousel.Item>
          <img
            className="carousel__image"
            src="images/Theboys.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-movie">
            <h1 className="carousel-movie__title">The Boys</h1>
            <div className="carousel-movie-details">
              <div className="carousel-movie-details__quality">
                <div>
                  {" "}
                  <p>HD</p>
                </div>
              </div>
              <p className="carousel-movie-details__rate">
                <FaStar /> 8.30
              </p>
              <p className="carousel-movie-details__minutes">148 min</p>
              <p className="carousel-movie__type">Action</p>
            </div>
            <p className="carousel-movie__bio">
              After half of all life is snapped away by Thanos, the Avengers are
              left scattered and divided. Now with a way to reverse the damage,
              the Avengers and their allies must assemble once more and learn to
              put differences aside in order to work together.....
            </p>
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
        <Carousel.Item>
          <img
            className="carousel__image"
            src="images/Mando.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-movie">
            <h1 className="carousel-movie__title">The Mandalorian</h1>
            <div className="carousel-movie-details">
              <div className="carousel-movie-details__quality">
                <div>
                  {" "}
                  <p>HD</p>
                </div>
              </div>
              <p className="carousel-movie-details__rate">
                <FaStar /> 8.30
              </p>
              <p className="carousel-movie-details__minutes">148 min</p>
              <p className="carousel-movie__type">Action</p>
            </div>
            <p className="carousel-movie__bio">
              After half of all life is snapped away by Thanos, the Avengers are
              left scattered and divided. Now with a way to reverse the damage,
              the Avengers and their allies must assemble once more and learn to
              put differences aside in order to work together.....
            </p>
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
      </Carousel>
    </div>
  );
};

export default HomeCarousel;

// images/Avengers.jpg
// images/Dune.jpg
// images/Mando.jpg
// images/Theboys.jpg
