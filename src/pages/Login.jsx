import React from "react";
import mealSvg from "../assets/meal2.svg";
import { Link } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="bgStyled d-flex flex-column align-items-center justify-content-center">
        <div className="text-center ">
          <div className="d-flex flex-column align-items-center">
            <img
              className="mb-4 "
              src={mealSvg}
              alt=""
              style={{ width: "150px" }}
            />
            <Link className="navbar-brand fw-bold mb-4   " to="/">
              {`<brs14shn>`} <span className="">RECİPE</span>
            </Link>
          </div>

          <form className="text-center p-3 ">
            <div className="mb-3 FormStyledInput">
              <input
                type="email"
                className="form-control FormStyledInput"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="USERNAME"
              />
            </div>
            <div className="mb-3 FormStyledInput">
              <input
                type="password"
                className="form-control FormStyledInput"
                id="exampleInputPassword1"
                placeholder="PASSWORD"
              />
            </div>

            <div>
              <button type="submit" class="btn btn-success text center">
                LOGİN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
