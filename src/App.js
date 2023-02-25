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
  const [allMovies, setAllMovies] = useState([]);
  const [moviesArray, setMoviesArray] = useState([]);
  const [moviesArray2, setMoviesArray2] = useState([]);
  const [moviesArray3, setMoviesArray3] = useState([]);
  const dispatch = useDispatch();

  // Getting movies from callApis
  useEffect(() => {
    const fetchingAllMovies = async () => {
      const data = await fetchMovies();
      data.forEach((el, index) => {
        if (index === 0) {
          setMoviesArray(el.data.Search);
        }
        if (index === 1) {
          setMoviesArray2(el.data.Search);
        }
        if (index === 2) {
          setMoviesArray3(el.data.Search);
        }
      });
    };
    fetchingAllMovies();
  }, []);

  useEffect(() => {
    setAllMovies([...moviesArray, ...moviesArray2, ...moviesArray3]);
    // Adding movies in redux
    dispatch(addMovies({ movies: allMovies }));
  }, [allMovies, moviesArray, moviesArray2, moviesArray3, dispatch]);

  console.log(allMovies);

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
