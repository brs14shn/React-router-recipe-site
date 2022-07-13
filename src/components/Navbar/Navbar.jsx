import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = React.useState(
    sessionStorage.getItem("username") || false
  );

  const handleClick = () => {
    setIsOpen(false);
    sessionStorage.clear();
  };

  // const handleLoginClick = () => {
  //   alert(`Enter username and password`);
  // };

  return (
    <nav className="navbar navbar-expand-lg  ">
      {isOpen ? (
        <div className="container-fluid fs-2 font-italic">
          <Link className="navbar-brand fw-bold " to="/">
            Barıs's Kitchen<span className="">Recipe 👨‍🍳</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2  mb-lg-0  nav-item  w-50 d-flex justify-content-around align-items-center ">
              <li className="liNav">
                <NavLink
                  style={({ isActive }) => ({ color: isActive && "red" })}
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  ABOUT
                </NavLink>
              </li>

              <li className="nav-item liNav">
                <a href="https://github.com/brs14shn">GİTHUB</a>
              </li>
              <li className="nav-item liNav">
                <NavLink
                  style={({ isActive }) => ({ color: isActive && "red" })}
                  onClick={handleClick}
                  to="/login"
                  className="nav-link"
                  aria-current="page"
                >
                  LOGOUT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link className="navbar-brand fw-bold " to="/">
          Barıs's Kitchen<span className="">Recipe 👨‍🍳</span>
        </Link>
      )}
    </nav>
  );
}

export default Nav;
