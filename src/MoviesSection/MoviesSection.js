import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import HomeCarousel from "../HomeCarousel/HomeCarousel";

const MoviesSection = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel type={"Now Playing Movies"} />
      <Navbar />
      <MoviesGrid type={"Now Playing Movies"} />
      <Footer />
    </>
  );
};

export default MoviesSection;
