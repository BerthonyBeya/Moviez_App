import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-box">
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
  );
};

export default Navbar;
