import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe, index }) => {
  console.log(recipe);
  const navigate = useNavigate();

  return <div>RecipeCard</div>;
};

export default RecipeCard;
