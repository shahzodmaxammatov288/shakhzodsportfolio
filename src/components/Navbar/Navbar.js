import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <div
          className={`overlay ${isActive ? "active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        ></div>
        <a href="index.html" className="logo">
          Shakhzod's Portfolio
        </a>
        <div
          className="nav__toggle__btn"
          onClick={() => setIsActive(!isActive)}
        >
          <span>
            <i className={`fas ${isActive ? "fa-close" : "fa-bars"}`}></i>
          </span>
        </div>
        <ul className={`lists ${isActive ? "active" : ""}`}>
          <li>
            <a
              className="nav-link"
              href="#aboutMe"
              onClick={() => setIsActive(!isActive)}
            >
              Men haqimda
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#skills"
              onClick={() => setIsActive(!isActive)}
            >
              Ko'nikmalar
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#services"
              onClick={() => setIsActive(!isActive)}
            >
              Xizmatlar
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#portfolio"
              onClick={() => setIsActive(!isActive)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#contact"
              onClick={() => setIsActive(!isActive)}
            >
              Aloqa
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
