import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MoviesGrid from "../MoviesGrid/MoviesGrid";

const SeriesSection = () => {
  return (
    <>
      <Navbar />
      <MoviesGrid type={"Now Playing Shows"} />
      <Footer />
    </>
  );
};

export default SeriesSection;
