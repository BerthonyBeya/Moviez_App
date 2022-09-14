import "./HomeCarousel.scss";
import { Carousel } from "react-bootstrap";

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
              color: "white",
              width: "50%",
              height: "11.875rem",
              position: "absolute",
              padding: "0",
              zIndex: "1",
              left: "1.25rem",
              bottom: "9rem",
              textAlign: "start",
              /* border: "1px solid dodgerblue", */
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h1 className="carousel__h1">Avengers Endgame</h1>
            <div className="carousel-container">
              <div className="carousel-movie__quality">
                {" "}
                <div>HD</div>
              </div>
              <p className="carousel-movie__type">Adventure</p>
            </div>
            <p className="carousel__p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              eaque voluptatum, ut quasi fugiat nesciunt! Deserunt blanditiis
              repellat autem voluptatum? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem adipisci et saepe ex autem, voluptas
              quasi cupiditate consectetur ab reprehenderit...
            </p>
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
