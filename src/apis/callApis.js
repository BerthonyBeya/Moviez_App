//API key -> 770df377767ac6b055c68672f960c59f
// APIs

import axios from "axios";

// Fetching all movies at once
const fetchMovies = () => {
  let movies = axios(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=770df377767ac6b055c68672f960c59f&language=en-US"
  );
  return movies;
};

export default fetchMovies;
