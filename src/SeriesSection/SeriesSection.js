import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MoviesGrid from "../MoviesGrid/MoviesGrid";

const SeriesSection = () => {
  return (
    <>
      <Navbar />
      <MoviesGrid type={"Tv Shows"} />
      <Footer />
    </>
  );
};

export default SeriesSection;
