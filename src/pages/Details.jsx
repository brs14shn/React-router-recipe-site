import React from "react";
import { useLocation } from "react-router-dom";
import MealSvg from "../assets/diet.svg";
import "../style/Details.css";

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
    <div
      className="container detailsDiv"
      style={{
        height: "80vh",
      }}
    >
      <div
        className="container d-flex flex-column justify-content-evenly align-items-center flex-sm-row"
        style={{ height: "15vh", marginTop: "2rem" }}
      >
        <h1 className="fs-4 fw-bold">{recipe.label}</h1>
        <div
          className="bg-info"
          style={{ borderRadius: "50%", padding: "3rem" }}
        >
          <img
            className=""
            src={MealSvg}
            style={{ width: "100px" }}
            alt="diet"
          />
        </div>
      </div>
      <div
        className="container border border-dark bg-secondary  d-flex justify-content-around align-items-center mt-5"
        style={{
          height: "40vh",
          borderTopLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
      >
        <div>
          <img
            className="img-thumbnail"
            style={{ width: "300px" }}
            src={recipe.image}
            alt=""
          />
        </div>
        <div className="text-white">
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

        <div className="text-white">
          <h3>Ingredients</h3>
          <ol>
            {recipe.ingredients.map((ingredient) => {
              return (
                <li
                  className=""
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
