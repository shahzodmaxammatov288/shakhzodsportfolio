import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__copy">&copy; Shakhzod Makhammatov</span>
      <ul className="footer__list">
        <li>
          <a href="t.me/ShakhzodMakhammatov" className="footer-link">
            <i className="fab fa-telegram"></i>
          </a>
        </li>
        <li>
          <a href="t.me/ShakhzodMakhammatov" className="footer-link">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/shahzodmaxammatov288"
            className="footer-link"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
