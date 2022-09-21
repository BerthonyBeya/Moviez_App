import "./SearchBar.scss";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const SearchBar = () => {
  const [color, setColor] = useState("#fff");

  const colorPrimaryHandler = () => {
    setColor("rgb(0, 12, 24)");
  };

  const colorWhiteHandler = () => {
    setColor("#fff");
  };

  return (
    <form
      className="search-bar"
      onMouseEnter={colorPrimaryHandler}
      onMouseLeave={colorWhiteHandler}
    >
      <button type="submit">
        <BsSearch color={color} className="search-bar__icon" />
      </button>

      <input
        type="text"
        placeholder="Enter your keywords..."
      />
    </form>
  );
};

export default SearchBar;
