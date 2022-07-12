import React from "react";
import "../style/Home.css";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const [recipies, setRecipes] = React.useState([]);
  const [query, setQuery] = React.useState("pizza");
  const [mealType, setMealType] = React.useState("Breakfast");

  // let API_KEY = process.env.REACT_APP_API_KEY;
  let API_KEY = "280a9f0207045a7b1eb040071263aca6";

  let API_ID = "742d542a";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${mealType}`;

  const getRecipies = async () => {
    const response = await axios.get(url);
    const { hits } = response.data;
    setRecipes(hits);
  };
  // getRecipies();
  const handleSearch = () => {
    query ? getRecipies(query, mealType) : alert("Please enter a search query");
  };

  return (
    <div className=" styled">
      <h1 className="text-center">Food App</h1>
      <div className="container mb-3 d-flex justify-content-center gap-3  w-50 ">
        <input
          className="bg-white"
          type="search"
          id="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
        <select
          onChange={(e) => setMealType(e.target.value)}
          class="form-select"
          style={{ width: "10rem" }}
          aria-label="Default select example"
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
      </div>
      <div className="container d-flex flex-wrap justify-content-around bg-secondary">
        {recipies?.map((recipe, index) => {
          return <RecipeCard {...recipe} key={index} />;
        })}
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
