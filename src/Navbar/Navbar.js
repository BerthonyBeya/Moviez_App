import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="container-box">
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-ul__link">
            <a href="/">Home</a>
          </li>
          <li className="navbar-ul__link">
            <a href="/movies">Movies</a>
          </li>
          <li className="navbar-ul__link">
            <a href="/tvshows">Tv Shows</a>
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
