import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="container-box">
      <nav className="navbar">
        <ul className="navbar__ul">
          <li className="navbar__li">
            <a href="/">Home</a>
          </li>
          <li className="navbar__li">
            <a href="/movie">Movies</a>
          </li>
          <li className="navbar__li">
            <a href="/tvshows">Tv Shows</a>
          </li>
          <li className="navbar__li">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </div>
  );
};

export default Navbar;
