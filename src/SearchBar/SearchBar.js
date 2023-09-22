import "./SearchBar.scss";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  /* const navigate = useNavigate();

  const searchHandler = (event) => {
    event.preventDefault();
    navigate("/nowplayingmovies");
  }; */

  return (
    <form onSubmit={() => {}} className="search-bar">
      <button type="submit">
        <BsSearch className="search-bar__icon" />
      </button>

      <input type="text" placeholder="Enter your keywords..." />
    </form>
  );
};

export default SearchBar;
