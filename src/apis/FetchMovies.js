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
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addMovies } from "../store/features/moviesSlice";

/* const fetchMovies = new Promise((resolve, reject) => {
  console.log("This is the promise");
  resolve("This is the resolve");
  fetch("http://www.omdbapi.com/?apikey=82a62b5c&i=tt0848228").then(
    (result) => {
      result.json().then((result) => {
        console.log(result);
      });
    }
  );
});

export default fetchMovies; */

const fetchMovies = () => {
  console.log("This is the method");
  fetch("http://www.omdbapi.com/?apikey=82a62b5c&type=movie&s=avengers").then(
    (result) => {
      result.json().then((result) => {
        console.log(result.Search[0].Poster);
      });
    }
  );
};

export default fetchMovies;
