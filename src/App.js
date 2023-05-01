import "./App.scss";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { addMovies } from "./store/features/moviesSlice";
import { addShows} from "./store/features/showsSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./HomePage/HomePage";
import MoviesSection from "./MoviesSection/MoviesSection";
import SeriesSection from "./SeriesSection/SeriesSection";

function App() {
  // Movies states
  const [upcomingMoviesPAGE1, setUpcomingMoviesPAGE1] = useState([]);
  const [upcomingMoviesPAGE2, setUpcomingMoviesPAGE2] = useState([]);
  const [nowPlayingMoviesPAGE1, setNowPlayingMoviesPAGE1] = useState([]);
  const [nowPlayingMoviesPAGE2, setNowPlayingMoviesPAGE2] = useState([]);

  // Shows states
  const [showsOnAirPAGE1, setShowsOnAirPAGE1] = useState([]);
  const [showsOnAirPAGE2, setShowsOnAirPAGE2] = useState([]);

  const dispatch = useDispatch();

  const route = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/movies", element: <MoviesSection /> },
    { path: "/series", element: <SeriesSection /> },
  ]);

  useEffect(() => {
    // Movies APIs
    const fetchingAllMovies = async () => {
      const endpoints = [
        "https://api.themoviedb.org/3/movie/upcoming?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=1",
        "https://api.themoviedb.org/3/movie/upcoming?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=2",
        "https://api.themoviedb.org/3/movie/now_playing?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=1",
        "https://api.themoviedb.org/3/movie/now_playing?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=2",
      ];

      // Running all promises asynchronously using Promise.allSettled()
      const responses = await Promise.allSettled(
        endpoints.map((endpoint) => axios.get(endpoint))
      );

      // Adding the fetched upcoming movies to the states
      // Page 1
      setUpcomingMoviesPAGE1(
        responses[0]?.value?.data?.results
          ? responses[0].value.data.results
          : ""
      );

      // Page 2
      setUpcomingMoviesPAGE2(
        responses[1]?.value?.data?.results
          ? responses[1].value.data.results
          : ""
      );

      // Adding the fetched now playing movies to the states
      // Page 1
      setNowPlayingMoviesPAGE1(
        responses[2]?.value?.data?.results
          ? responses[2].value.data.results
          : ""
      );

      // Page 2
      setNowPlayingMoviesPAGE2(
        responses[3]?.value?.data?.results
          ? responses[3].value.data.results
          : ""
      );
    };

    // Shows APIs
    const fetchingAllShows = async () => {
      const endpoints = [
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=1",
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=2",
      ];

      const responses = await Promise.allSettled(
        endpoints.map((endpoint) => {
          return axios(endpoint);
        })
      );

      // Adding the fetched showsOnAir to the states
      // PAGE1
      setShowsOnAirPAGE1(
        responses[0]?.value?.data?.results
          ? responses[0].value.data.results
          : ""
      );

      //PAGE2
      setShowsOnAirPAGE2(
        responses[1]?.value?.data?.results
          ? responses[1].value.data.results
          : ""
      );

      /* console.log(results[0].value.data.results); */
    };

    fetchingAllMovies();
    fetchingAllShows();
  }, []);

  // Sending upcoming movies to redux store
  dispatch(
    addMovies({
      upcomingMovies: [...upcomingMoviesPAGE1, ...upcomingMoviesPAGE2],
      nowPlaying: [...nowPlayingMoviesPAGE1, ...nowPlayingMoviesPAGE2],
    })
  );

  dispatch(
    addShows({
      showsOnAir: [...showsOnAirPAGE1, ...showsOnAirPAGE2],
    })
  );

  // Sending on air shows to redux store
  addShows({ showsOnAir: [] });

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
