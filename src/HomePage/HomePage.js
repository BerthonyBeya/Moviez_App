import HomeCarousel from "../HomeCarousel/HomeCarousel";
import Navbar from "../Navbar/Navbar";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import Footer from "../Footer/Footer";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <HomeCarousel type={"homePage"} />
      <MoviesGrid type={"Upcoming Movies"} />
      <MoviesGrid type={"Popular TV Shows"} />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
