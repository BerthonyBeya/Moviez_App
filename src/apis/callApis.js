//API key -> 770df377767ac6b055c68672f960c59f
// APIs

import axios from "axios";

// Fetching all movies at once
const fetchMovies = () => {
  /*  let movies = axios(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=1`
  );

  return movies; */

  const endpoints = [
    "https://api.themoviedb.org/3/movie/upcoming?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=1",
    "https://api.themoviedb.org/3/movie/upcoming?api_key=770df377767ac6b055c68672f960c59f&language=en-US&page=2",
  ];

  let data = endpoints.map((endpoint) => {
    let results = axios.get(endpoint);
    return results;
  });

  return data;
};

export default fetchMovies;
