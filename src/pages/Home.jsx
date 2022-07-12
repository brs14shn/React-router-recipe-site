import React from "react";
import "../style/Home.css";

const Home = () => {
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
