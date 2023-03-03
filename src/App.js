import "./App.scss";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addMovies } from "./store/features/moviesSlice";
import fetchMovies from "./apis/callApis";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./HomePage/HomePage";
import MoviesSection from "./MoviesSection/MoviesSection";
import SeriesSection from "./SeriesSection/SeriesSection";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [moviesArray, setMoviesArray] = useState([]);
  const [moviesArray2, setMoviesArray2] = useState([]);
  const [moviesArray3, setMoviesArray3] = useState([]);
  const dispatch = useDispatch();

  const route = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/movies", element: <MoviesSection /> },
    { path: "/series", element: <SeriesSection /> },
  ]);

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
  }, [moviesArray, moviesArray2, moviesArray3, dispatch]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
