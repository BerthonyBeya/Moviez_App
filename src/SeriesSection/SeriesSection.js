import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import HomeCarousel from "../HomeCarousel/HomeCarousel";

const SeriesSection = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel type={"Now Playing Shows"} />
      <MoviesGrid type={"Now Playing Shows"} />
      <Footer />
    </>
  );
};

export default SeriesSection;
