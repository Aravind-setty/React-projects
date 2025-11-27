import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };
  return (
    <div className="searchDiv">
      <input
        type="text"
        className="inp"
        placeholder="Search Books by title.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="btnSubmit btn-hover">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
