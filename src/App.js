import "./App.scss";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Navbar from "./Navbar/Navbar";
import MoviesGrid from "./MoviesGrid/MoviesGrid";
import Footer from "./Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addMovies } from "./store/features/moviesSlice";
import fetchMovies from "./apis/callApis";

function App() {
  const [allMovies, setAllMovies] = useState();
  const dispatch = useDispatch();

  // Getting movies from callApis
  useEffect(() => {
    const fetchingAllMovies = async () => {
      const data = await fetchMovies();
      setAllMovies(data.data.Search);
    };

    fetchingAllMovies(); 
  }, []);

  useEffect(() => {
    // Adding movies in redux
    dispatch(addMovies({ movies: allMovies }));
  }, [allMovies, dispatch]);

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
