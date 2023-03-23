import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MoviesGrid from "../MoviesGrid/MoviesGrid";

const MoviesSection = () => {
  return (
    <>
      <Navbar />
      <MoviesGrid type={"Now Playing Movies"} />
      <Footer />
    </>
  );
};

export default MoviesSection;
