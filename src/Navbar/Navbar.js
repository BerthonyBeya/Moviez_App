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
            <a href="/movies">Movies</a>
          </li>
          <li className="navbar-ul__link">
            <a href="/series">Tv Shows</a>
          </li>
          <li className="navbar-ul__link">
            <a href="/favorite">Favorite</a>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </div>
  );
};

export default Navbar;
