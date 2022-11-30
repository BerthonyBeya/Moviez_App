import "./App.scss";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Navbar from "./Navbar/Navbar";
import MoviesGrid from "./MoviesGrid/MoviesGrid";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import FetchMovies from "./apis/FetchMovies";

function App() {
  useEffect(() => {
    FetchMovies();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HomeCarousel />
      <MoviesGrid type={"Top movies"} />
      <MoviesGrid type={"Top series"} />
      <Footer />
    </div>
  );
}

export default App;
