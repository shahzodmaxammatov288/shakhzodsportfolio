import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="info" data-aos="fade-up">
      <h2 className="info__title">Info</h2>
      <ul className="info__list">
        <li>
          <a href="tel:998901929900" className="info-link">
            <i className="fas fa-phone"></i> +998 (90) 192-99-00
          </a>
        </li>
        <li>
          <a href="t.me/ShakhzodMakhammatov" className="info-link">
            <i className="fab fa-telegram"></i> t.me/ShakhzodMakhammatov
          </a>
        </li>
        <li>
          <a href="shahzodmaxammatov288@gmail.com" className="info-link">
            <i className="fas fa-envelope"></i> shahzodmaxammatov288@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/shahzodmaxammatov288"
            className="info-link"
          >
            <i className="fab fa-github"></i> github.com/shahzodmaxammatov288
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
