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
  const [upcomingMoviesPAGE1, setUpcomingMoviesPAGE1] = useState([]);
  const [upcomingMoviesPAGE2, setUpcomingMoviesPAGE2] = useState([]);
  const [nowPlayingMoviesPAGE1, setNowPlayingMoviesPAGE1] = useState([]);
  const [nowPlayingMoviesPAGE2, setNowPlayingMoviesPAGE2] = useState([]);

  const dispatch = useDispatch();

  const route = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/movies", element: <MoviesSection /> },
    { path: "/series", element: <SeriesSection /> },
  ]);

  useEffect(() => {
    // Movies API
    const fetchingAllMovies = () => {
      const endpoints = [
        "https://api.themoviedb.org/3/movie/upcoming?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=1",
        "https://api.themoviedb.org/3/movie/upcoming?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=2",
        "https://api.themoviedb.org/3/movie/now_playing?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=1",
        "https://api.themoviedb.org/3/movie/now_playing?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=2",
      ];

      try {
        axios.all(
          endpoints.map(async (endpoint, index) => {
            const moviepages = await axios.get(endpoint);
            if (index === 0) {
              setUpcomingMoviesPAGE1(moviepages.data.results);
            }

            if (index === 1) {
              setUpcomingMoviesPAGE2(moviepages.data.results);
            }

            if (index === 2) {
              setNowPlayingMoviesPAGE1(moviepages.data.results);
            }

            if (index === 3) {
              setNowPlayingMoviesPAGE2(moviepages.data.results);
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
  dispatch(
    addMovies({
      upcomingMovies: [...upcomingMoviesPAGE1, ...upcomingMoviesPAGE2],
      nowPlaying: [...nowPlayingMoviesPAGE1, ...nowPlayingMoviesPAGE2],
    })
  );

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
