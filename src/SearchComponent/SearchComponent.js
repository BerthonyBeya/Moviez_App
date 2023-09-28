import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import { useDispatch } from "react-redux";
import { addSearch } from "../store/features/searchSlice";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const SearchComponent = () => {
  const [results, setResults] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSearchedData = async () => {
      const movie = `https://api.themoviedb.org/3/search/movie?api_key=770df377767ac6b055c68672f960c59f&query=${id}&include_adult=false&language=en-US&page=1`;
      const tv = `https://api.themoviedb.org/3/search/tv?api_key=770df377767ac6b055c68672f960c59f&query=${id}&include_adult=false&language=en-US&page=1`;

      // Fetching for the searched data
      const [movieResponse, tvResponse] = await Promise.allSettled(
        [movie, tv].map((data) => {
          return axios(data);
        })
      );

      // Checking which one is successful and adding them to the state
      if (
        movieResponse?.status === "fulfilled" &&
        tvResponse?.status === "fulfilled"
      ) {
        setResults([
          ...movieResponse?.value?.data?.results,
          ...tvResponse?.value?.data?.results,
        ]);
      }

      if (
        movieResponse?.status === "fulfilled" &&
        tvResponse?.status === "rejected"
      ) {
        setResults([...movieResponse?.value?.data?.results]);
      }

      if (
        movieResponse?.status === "rejected" &&
        tvResponse?.status === "fulfilled"
      ) {
        setResults([...tvResponse?.value?.data?.results]);
      }
    };

    fetchSearchedData();
  }, [id]);

  // Sending data to the redux store
  const dispatch = useDispatch();
  dispatch(addSearch({ search: results }));

  return (
    <>
      <Navbar />
      <MoviesGrid type={"Searched"} />
      <Footer />
    </>
  );
};

export default SearchComponent;
