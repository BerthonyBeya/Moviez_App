import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState("");

  // Toggle the hamburger menu
  const hamburgerToggler = () => {
    setToggle((currentState) => {
      return currentState === "hamburger" ? "" : "hamburger";
    });
  };

  return (
    <>
      <HamburgerMenu hamburgerToggler={hamburgerToggler} />
      <div className={`container-box ${toggle}`}>
        <nav className="navbar">
          <ul className="navbar-ul">
            <li className="navbar-ul__link">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-ul__link">
              <Link to="/nowplayingmovies">Now Playing Movies</Link>
            </li>
            <li className="navbar-ul__link">
              <Link to="/nowplayingshows">Now Playing Tv Shows</Link>
            </li>
            {/* <li className="navbar-ul__link">
            <Link to="/favorites">Favorites</Link>
          </li> */}
          </ul>
        </nav>
        <SearchBar />
      </div>
    </>
  );
};

export default Navbar;
