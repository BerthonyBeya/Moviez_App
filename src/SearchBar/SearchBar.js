import "./SearchBar.scss";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <form className="search-bar">
      <button type="submit">
        <BsSearch className="search-bar__icon" />
      </button>

      <input type="text" placeholder="Enter your keywords..." />
    </form>
  );
};

export default SearchBar;
