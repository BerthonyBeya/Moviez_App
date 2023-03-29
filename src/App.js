import "./App.scss";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { addMovies } from "./store/features/moviesSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./HomePage/HomePage";
import MoviesSection from "./MoviesSection/MoviesSection";
import SeriesSection from "./SeriesSection/SeriesSection";

function App() {
  // Upcoming movies states
  const [moviePAGE1, setMoviePAGE1] = useState([]);
  const [moviePAGE2, setMoviePAGE2] = useState([]);

  const dispatch = useDispatch();

  const route = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/movies", element: <MoviesSection /> },
    { path: "/series", element: <SeriesSection /> },
  ]);

  useEffect(() => {
    // Upcoming movies API
    const fetchingAllMovies = () => {
      const endpoints = [
        "https://api.themoviedb.org/3/movie/upcoming?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=1",
        "https://api.themoviedb.org/3/movie/upcoming?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=2",
      ];

      try {
        axios.all(
          endpoints.map(async (endpoint, index) => {
            const moviepage = await axios.get(endpoint);
            if (index === 0) {
              setMoviePAGE1(moviepage.data.results);
            }

            if (index === 1) {
              setMoviePAGE2(moviepage.data.results);
            }
          })
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchingAllMovies();
  }, []);

  /* console.log(moviePAGE1);
  console.log(moviePAGE2);
 */
  // Adding upcoming movies in redux
  dispatch(addMovies({ upcomingMovies: [...moviePAGE1, ...moviePAGE2] }));

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
