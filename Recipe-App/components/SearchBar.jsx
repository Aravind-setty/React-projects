import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [dishName, setDishName] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (dishName.trim()) onSearch(dishName);
  };
  return (
    <div className="searchbardiv">
      <div className="logo">Recipe App</div>
      <div className="bar">
        <input
          type="text"
          className="inp"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
