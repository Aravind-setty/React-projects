import React from "react";

const DishList = ({ d }) => {
  if (!d) return null;
  return (
    <div className="dishlist">
      <img src={d.strMealThumb} alt={d.strMeal} className="img"/>
      <div className="details">
        <h3>{d.strMeal}</h3>
        <h5>Belongs to :{d.strArea}</h5>
        <p>Recipe : {d.strInstructions}</p>
      </div>
    </div>
  );
};

export default DishList;
