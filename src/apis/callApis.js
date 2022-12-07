// REACT_APP_MY_KEY=82a62b5c

// Endpoint: "http://www.omdbapi.com/?apikey=82a62b5c&type=movie&s=avengers"

// Endpoint with ID: "http://www.omdbapi.com/?apikey=82a62b5c&i=tt0848228"

/* import axios from "axios";


fetch("http://www.omdbapi.com/?apikey=82a62b5c&type=movie&s=avengers").then(
  (result) => {
    result.json().then((result) => {
      console.log(result);
    });
  }
);

fetch("http://www.omdbapi.com/?apikey=82a62b5c&i=tt0848228").then((result) => {
  result.json().then((result) => {
    console.log(result);
  });
}); */

/* fetch("http://www.omdbapi.com/?apikey=82a62b5c&i=tt0848228").then(
    (result) => {
      result.json().then((result) => {
        console.log(result);
      });
    }
  ); */

import axios from "axios";

// Fetching movies
const fetchMovies = () => {
  return axios("http://www.omdbapi.com/?apikey=82a62b5c&type=movie&s=avengers");
};

export default fetchMovies;
