import React from "react";
import SearchBar from "../components/SearchBar";
import DishList from "../components/DishList";
import useRecipe from "../hooks/useRecipe";

const App = () => {
  const { dish, searchDish } = useRecipe();

  return (
    <>
      <div>
        <SearchBar onSearch={searchDish} />
      </div>
      <div>
        {dish.map((d, idx) => (
          <DishList key={d.idMeal || idx} d={d} />
        ))}
      </div>
    </>
  );
};

export default App;
