import React, { useState } from "react";

const useRecipe = () => {
  const [dish, setDish] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchDish = async (dish) => {
    if (!dish) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`
      );

      const data = await res.json();
      console.log(data);
      setDish(data.meals || []);
    } catch {
      setError("Not Found");
    } finally {
      setLoading(false);
    }
  };
  return { dish, searchDish, loading, error };
};

export default useRecipe;
