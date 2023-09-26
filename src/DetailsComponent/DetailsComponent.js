import { useEffect, useState } from "react";
import axios from "axios";
import "./DetailsComponent.scss";

// "Movie" gardians of the galaxy      id:447365
// "Show"  The Challenge: USA          id:203423 

const DetailsComponent = () => {
  const [movieDetails, setMovieDetails] = useState("Movie details state is empty");
  const [showDetails, setShowDetails] = useState("Tv Show details state is empty");

  useEffect(() => {
    const fetchSearchedData = async () => {
      const movie = `https://api.themoviedb.org/3/movie/${"447365"}?api_key=${"770df377767ac6b055c68672f960c59f"}`;
      const tv = `https://api.themoviedb.org/3/tv/${"203423"}?api_key=${"770df377767ac6b055c68672f960c59f"}`;

      // Fetching for the searched data
      const [movieResponse, showResponse] = await Promise.allSettled(
        [movie, tv].map((data) => {
          return axios(data);
        })
      );

      // If it's a movie details add it here
      if (movieResponse?.status === "fulfilled") {
        setMovieDetails(movieResponse.value);
      }

      // If it's a show details add it here
      if (showResponse?.status === "fulfilled") {
        setShowDetails(showResponse.value);
      }
    };

    fetchSearchedData();
  }, []);

  console.log(movieDetails);
  console.log(showDetails);

  return (
    <div>
      <h1>Details Component</h1>
    </div>
  );
};

export default DetailsComponent;
