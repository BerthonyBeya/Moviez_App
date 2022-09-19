import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form className="search-bar">
      <button type="submit">
        <FaSearch
          className="search-bar__icon"
          fontSize={"20px"}
        />
      </button>

      <input type="text" placeholder="Enter your keywords..." />
    </form>
  );
};

export default SearchBar;
