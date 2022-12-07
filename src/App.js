import "./App.scss";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Navbar from "./Navbar/Navbar";
import MoviesGrid from "./MoviesGrid/MoviesGrid";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMovies } from "./store/features/moviesSlice";
import fetchMovies from "./apis/callApis";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addMovies({ movies: "These are movies" }));
  }, [dispatch]);

  const movies = useSelector((state) => {
    return state.movies.value;
  });

  console.log(movies);

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
