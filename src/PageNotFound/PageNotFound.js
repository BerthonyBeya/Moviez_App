import MoviesGrid from "../MoviesGrid/MoviesGrid";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Fragment } from "react";

const PageNotFound = () => {
  return (
    <Fragment>
      <Navbar />
      <MoviesGrid type={"Unknown"}/>
      <Footer />
    </Fragment>
  );
};

export default PageNotFound;
