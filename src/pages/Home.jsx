import React from "react";
import "../style/Home.css";
import axios from "axios";

const Home = () => {
  let API_KEY = process.env.REACT_APP_API_KEY;
  let API_ID = "742d542a";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`;

  const getRecipes = () => {};

  return (
    <div className=" styled">
      <h1 className="text-center">Food App</h1>
      <div className="container mb-3  d-flex justify-content-center gap-3  ">
        <input
          className="bg-white"
          type="search"
          id="search"
          placeholder="Search"
        />
        <button className="btn btn-danger">Search</button>
        <select class="form-select w-25" aria-label="Default select example">
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
      </div>
    </div>
  );
};

export default Home;

//* API
// APIKEY=280a9f0207045a7b1eb040071263aca6
// APIID=742d542a

// https://developer.edamam.com/edamam-docs-recipe-api

//https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}.
