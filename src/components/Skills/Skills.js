import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <SectionTitle text="Ko'nikmalar" title="left" location="auto" />
      <div className="container skills-container">
        <ul className="skills__list">
          <li>
            <i className="fab fa-html5"></i> HTML
          </li>
          <li>
            <i className="fab fa-css3"></i> CSS
          </li>
          <li>
            <i className="fab fa-sass"></i> SCSS
          </li>
        </ul>
        <ul className="skills__list">
          <li>
            <i className="fab fa-bootstrap"></i> BOOTSTRAP
          </li>
          <li>
            <i className="fab fa-js"></i> JAVASCRIPT
          </li>
          <li>
            <i className="fab fa-react"></i> REACT JS
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
