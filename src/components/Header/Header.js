import React from "react";
import "./header.css";
import header__img from "../../assets/images/header__img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="header_follow_me">
          <h4>Follow me on</h4>
          <hr />
          <ul className="header_follow_me_lists">
            <li>
              <a href="https://t.me/Shakhzod_Makhammatov" target="_blank">
                <i class="fab fa-telegram"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/shakhzod_makhammatov" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="tel:998901929900">
                <i class="fa-solid fa-phone"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="header__left">
          <h1 className="header__title">
            Shahzod <br /> <span>Maxammatov</span>
          </h1>
          <h4 className="header__job">Web, Front End dasturchi</h4>
        </div>
        <div className="header__right">
          <img src={header__img} alt="header-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
