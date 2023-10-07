import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { addMovies } from "./store/features/moviesSlice";
import { addShows } from "./store/features/showsSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";

// Pages
import HomePage from "./HomePage/HomePage";
import MoviesSection from "./MoviesSection/MoviesSection";
import SeriesSection from "./SeriesSection/SeriesSection";
import PageNotFound from "./PageNotFound/PageNotFound";
import FavoriteComponent from "./FavoriteComponent/FavoriteComponent";
import SearchComponent from "./SearchComponent/SearchComponent";
import DetailsComponent from "./DetailsComponent/DetailsComponent";

function App() {
  // Movies states
  const [upcomingMoviesPAGE1, setUpcomingMoviesPAGE1] = useState([]);
  const [upcomingMoviesPAGE2, setUpcomingMoviesPAGE2] = useState([]);
  const [nowPlayingMoviesPAGE1, setNowPlayingMoviesPAGE1] = useState([]);
  const [nowPlayingMoviesPAGE2, setNowPlayingMoviesPAGE2] = useState([]);
  const [nowPlayingMoviesPAGE3, setNowPlayingMoviesPAGE3] = useState([]);

  // Shows states
  const [showsOnAirPAGE1, setShowsOnAirPAGE1] = useState([]);
  const [showsOnAirPAGE2, setShowsOnAirPAGE2] = useState([]);
  const [showsOnAirPAGE3, setShowsOnAirPAGE3] = useState([]);
  const [popularTvShowsPAGE1, setPopularTvShowsPAGE1] = useState([]);
  const [popularTvShowsPAGE2, setPopularTvShowsPAGE2] = useState([]);

  const dispatch = useDispatch();

  const route = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/nowplayingmovies", element: <MoviesSection /> },
    { path: "/nowplayingshows", element: <SeriesSection /> },
    { path: "/search/:id", element: <SearchComponent /> },
    { path: "/favorites", element: <FavoriteComponent /> },
    { path: "/details/:id/:type", element: <DetailsComponent /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  useEffect(() => {
    const UPCOMING_MOVIES_ENDPOINS = [
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`,
    ];

    const NOW_PLAYING_MOVIES_ENDPOINTS = [
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`,
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=3`,
    ];

    const SHOWS_ON_AIR_ENDPOINTS = [
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`,
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=3`,
    ];

    const POPULAR_TV_SHOWS_ENDPOINTS = [
      "https://api.themoviedb.org/3/tv/popular?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=1",
      "https://api.themoviedb.org/3/tv/popular?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=2",
    ];

    const fetchAllData = async (endpointsArray, type) => {
      const responses = await Promise.allSettled(
        endpointsArray.map((endpoint) => {
          return axios.get(endpoint);
        })
      );

      if (type === "movies") {
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
        // Page 3
        setNowPlayingMoviesPAGE3(
          responses[4]?.value?.data?.results
            ? responses[4].value.data.results
            : ""
        );
      }

      if (type === "tv") {
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
        //PAGE3
        setShowsOnAirPAGE3(
          responses[2]?.value?.data?.results
            ? responses[2].value.data.results
            : ""
        );

        // PAGE 1
        setPopularTvShowsPAGE1(
          responses[3]?.value?.data?.results
            ? responses[3].value.data.results
            : ""
        );
        // PAGE 2
        setPopularTvShowsPAGE2(
          responses[4]?.value?.data?.results
            ? responses[4].value.data.results
            : ""
        );
      }
    };

    // Calling the fetchAllData method
    fetchAllData(
      [...UPCOMING_MOVIES_ENDPOINS, ...NOW_PLAYING_MOVIES_ENDPOINTS],
      "movies"
    );

    fetchAllData(
      [...SHOWS_ON_AIR_ENDPOINTS, ...POPULAR_TV_SHOWS_ENDPOINTS],
      "tv"
    );
  }, []);

  // Sending movies to redux store
  dispatch(
    addMovies({
      upcomingMovies: [...upcomingMoviesPAGE1, ...upcomingMoviesPAGE2],
      nowPlaying: [
        ...nowPlayingMoviesPAGE1,
        ...nowPlayingMoviesPAGE2,
        ...nowPlayingMoviesPAGE3,
      ],
    })
  );

  // Sending shows to the redux store
  dispatch(
    addShows({
      showsOnAir: [...showsOnAirPAGE1, ...showsOnAirPAGE2, ...showsOnAirPAGE3],
      popularTvShows: [...popularTvShowsPAGE1, ...popularTvShowsPAGE2],
    })
  );

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
