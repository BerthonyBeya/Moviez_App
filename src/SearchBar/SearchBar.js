import "./SearchBar.scss";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  // Collecting title from input
  const inputHandler = (event) => {
    setTitle((currentState) => {
      return (currentState = event.target.value);
    });
  };

  // Using useNavigate to navigate to different router and passing in the Title
  const titleHandler = (event) => {
    event.preventDefault();
    navigate(`/search/${title}`);
    setTitle("");
  };

  return (
    <form className="search-bar" onSubmit={titleHandler}>
      <button type="submit">
        <BsSearch className="search-bar__icon" />
      </button>

      <input
        type="text"
        placeholder="Enter your keywords..."
        onChange={inputHandler}
        value={title}
      />
    </form>
  );
};

export default SearchBar;
