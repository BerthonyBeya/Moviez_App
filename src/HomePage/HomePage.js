import HomeCarousel from "../HomeCarousel/HomeCarousel";
import Navbar from "../Navbar/Navbar";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import Footer from "../Footer/Footer";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <HomeCarousel />
      <MoviesGrid type={"Top movies"} />
      <MoviesGrid type={"Top series"} />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
