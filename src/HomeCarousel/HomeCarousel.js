import "./HomeCarousel.scss";
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <>
      <div className="carousel-overlay"></div>
      <div className="carousel__content">
        <h1>This is the content</h1>
      </div>
      <Carousel interval={1000000} nextIcon={false} prevIcon={false}>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="images/Avengers.jpg"
            alt="First slide"
          />
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
