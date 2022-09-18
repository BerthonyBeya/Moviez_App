import "./HomeCarousel.scss";
import { Carousel, Button } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <>
      <div className="carousel-overlay"></div>
      <Carousel interval={1000000} nextIcon={false} prevIcon={false}>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="images/Avengers.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              color: "#fff",
              width: "50%",
              height: "15rem" /* 11.875rem */,
              position: "absolute",
              padding: "0",
              zIndex: "1",
              left: "1.25rem",
              bottom: "7rem",
              textAlign: "start",
              border: "1px solid dodgerblue",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <h1 className="carousel__h1">Top Gun: Endgame</h1>
            <div className="carousel-container">
              <div className="carousel-movie__quality">
                {" "}
                <div>HD</div>
              </div>
              <p className="carousel__rate">8.30</p>
              <p className="carousel__minutes">148 min</p>
              <p className="carousel-movie__type">Action</p>
            </div>
            <p className="carousel__p">
              After half of all life is snapped away by Thanos, the Avengers are
              left scattered and divided. Now with a way to reverse the damage,
              the Avengers and their allies must assemble once more and learn to
              put differences aside in order to work together...
            </p>
            <div className="carousel-button-container">
              <span>
                <Button
                  style={{
                    marginRight: "1.5rem",
                    width: "8rem",
                    borderRadius: "1rem",
                    background: "transparent",
                  }}
                >
                  Watch now
                </Button>
              </span>
              <span>
                <Button
                  style={{
                    width: "8rem",
                    borderRadius: "1rem",
                    background: "transparent",
                  }}
                >
                  Add to list
                </Button>
              </span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="images/Dune.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              eaque voluptatum, ut quasi fugiat nesciunt! Deserunt blanditiis
              repellat autem voluptatum?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="images/Theboys.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              eaque voluptatum, ut quasi fugiat nesciunt! Deserunt blanditiis
              repellat autem voluptatum?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="images/Mando.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              eaque voluptatum, ut quasi fugiat nesciunt! Deserunt blanditiis
              repellat autem voluptatum?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
