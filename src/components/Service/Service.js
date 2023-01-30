import React from "react";
import "./service.css";

const Service = ({ id, iconName, title, desc }) => {
  return (
    <div key={id} className="service">
      <div className="service__box__icon">
        <i className={iconName}></i>
      </div>
      <h2 className="service__title">{title}</h2>
      <p className="service__description">{desc}</p>
    </div>
  );
};

export default Service;
