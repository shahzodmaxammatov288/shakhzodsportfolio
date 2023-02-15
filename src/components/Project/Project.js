import React from "react";
import "./project.css";

//! images

import truckDispatching from "../../assets/images/truck-dispatching.png";
import foodDelivery from "../../assets/images/food-delivery.png";
import koronaTaxi from "../../assets/images/korona-taxi.png";
import hotel from "../../assets/images/hotel.png";
import burgerHouse from "../../assets/images/burger.png";

const Project = ({ title, imgSrc, linkGithub, linkSite }) => {
  return (
    <div className="project" data-aos="fade-up">
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
