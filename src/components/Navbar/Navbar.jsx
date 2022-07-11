import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = React.useState(
    sessionStorage.getItem("email") || false
  );

  const handleClick = () => {
    setIsOpen(false);
    sessionStorage.clear();
  };

  return (
    <nav class="navbar navbar-expand-lg bgColor ">
      <div class="container-fluid fs-2 font-italic">
        <Link class="navbar-brand fw-bold " to="/">
          {`<brs14shn>`} <span className="">RECİPE</span>
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive && "red" })}
                to="/about"
                className="nav-link active"
                aria-current="page"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="https://github.com/brs14shn">GİTHUB</a>
              {/* <NavLink
                style={({ isActive }) => ({ color: isActive && "red" })}
                to="https://github.com/brs14shn"
                className="nav-link"
                aria-current="page"
              >
                Github
              </NavLink> */}
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive && "red" })}
                onClick={handleClick}
                to="/"
                className="nav-link"
                aria-current="page"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
