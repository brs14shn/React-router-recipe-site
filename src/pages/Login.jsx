import React from "react";
import mealSvg from "../assets/meal2.svg";
import { Link } from "react-router-dom";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("username", JSON.stringify(username));
    sessionStorage.setItem("password", JSON.stringify(password));
    console.log(username);
    navigate("/home");

    // window.location.href = "/home";
  };

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
              <span className="">RECİPE</span>
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="text-center p-3 ">
            <div className="mb-3 FormStyledInput">
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="form-control FormStyledInput"
                id="username"
                value={username}
                placeholder="USERNAME"
                required
              />
            </div>
            <div className="mb-3 FormStyledInput">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control FormStyledInput"
                id="password"
                value={password}
                placeholder="PASSWORD"
                required
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
