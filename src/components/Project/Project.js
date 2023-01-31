import React from "react";
import "./project.css";
import hotel from "../../assets/images/korona-taxi.png";

const Project = ({ title, imgSrc, linkGithub, linkSite }) => {
  console.log(hotel);
  return (
    <div className="project">
      <img src={imgSrc} alt="" />
      <div className="project__box">
        <h2 className="project__title">{title}</h2>
        <div className="project__links">
          <a href={linkGithub} className="project__link" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href={linkSite} className="project__link" target="_blank">
            <i className="fas fa-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
