import React from "react";
import { useLocation } from "react-router-dom";
import MealSvg from "../assets/diet.svg";
const Details = () => {
  const location = useLocation();
  const recipe = location.state.recipe;
  console.log(location.state);

  const {
    PROCNT: prot,
    CHOLE: chol,
    FAT: fat,
    CA: ca,
    ENERC_KCAL: kcal,
    CHOCDF: carb,
    SUGAR: sug,
  } = recipe.totalNutrients;

  return (
    <div className="">
      <div
        className="container mt-3 d-flex flex-column justify-content-evenly align-items-center flex-sm-row"
        style={{ height: "15vh", backgroundColor: "pink" }}
      >
        <h1 className="fs-4 fw-bold">{recipe.label}</h1>
        <img src={MealSvg} style={{ width: "100px" }} alt="diet" />
      </div>
      <div className="container border border-dark bg-info  d-flex justify-content-around align-items-center">
        <div>
          <h3>Nutrients</h3>
          <p className="m-0">
            {ca.label} : {Math.round(ca.quantity)} {ca.unit}
          </p>
          <p className="m-0">
            {carb.label} : {Math.round(carb.quantity)} {carb.unit}
          </p>
          <p className="m-0">
            {chol.label} : {Math.round(chol.quantity)} {chol.unit}
          </p>
          <p className="m-0">
            {kcal.label} : {Math.round(kcal.quantity)} {kcal.unit}
          </p>
          <p className="m-0">
            {fat.label} : {Math.round(fat.quantity)}
          </p>
          <p className="m-0">Calories : {Math.round(kcal.quantity)}</p>
          <p className="m-0">
            {prot.label} : {Math.round(prot.quantity)}
          </p>
          <p className="m-0">
            {sug.label} : {Math.round(sug.quantity)}
          </p>
        </div>
        <div>
          <img
            className="img-thumbnail"
            style={{ width: "300px" }}
            src={recipe.image}
            alt=""
          />
        </div>
        <div>
          <h3>Ingredients</h3>
          <ol>
            {recipe.ingredients.map((ingredient) => {
              return (
                <li
                  className="text-dark"
                  style={{ fontSize: ".7rem", textAlign: "left" }}
                >
                  {ingredient.text}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Details;
