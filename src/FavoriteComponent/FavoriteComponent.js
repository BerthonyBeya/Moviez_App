import { Fragment } from "react";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const FavoriteComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <MoviesGrid type={"Favorites"} />
      <Footer />
    </Fragment>
  );
};

export default FavoriteComponent;
