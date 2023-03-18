// REACT_APP_MY_KEY=82a62b5c

// Endpoint: "http://www.omdbapi.com/?apikey=82a62b5c&type=movie&s=avengers"

// Endpoint with ID: "http://www.omdbapi.com/?apikey=82a62b5c&i=tt0848228"

// APIs

import axios from "axios";

// Fetching all movies at once
const fetchMovies = () => {
  let endpoints = [
    "http://www.omdbapi.com/?apikey=82a62b5c&type=movie&s=avengers",
    "http://www.omdbapi.com/?apikey=82a62b5c&type=movie&s=supermen",
    "http://www.omdbapi.com/?apikey=82a62b5c&type=movie&s=batman",
  ];

  let movies = axios.all(
    endpoints.map((endpoint) => {
      return axios.get(endpoint);
    })
  );

  return movies;
};

export default fetchMovies;
