import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Tv Shows</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
