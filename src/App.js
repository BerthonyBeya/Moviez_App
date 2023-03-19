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

  const dispatch = useDispatch();

  const route = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/movies", element: <MoviesSection /> },
    { path: "/series", element: <SeriesSection /> },
  ]);

  useEffect(() => {
    // Getting movies from callApis
    const fetchingAllMovies = async () => {
      let data = await fetchMovies();
      console.log(data);
      setAllMovies(data.data.results);
    };
    fetchingAllMovies();
  }, []);

  // Adding movies in redux
  dispatch(addMovies({ movies: allMovies }));

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
