import React from "react";
import "./button.css";
import rezyume from "../../../assets/files/Rezume.pdf";

const Button = ({ href, text, target, styleLink, iconLink }) => {
  return (
    <div className="button__wrapper">
      <a
        href={href || rezyume}
        className={`button__link ${styleLink}`}
        target={target && "target"}
      >
        {iconLink || ""} {text}
      </a>
    </div>
  );
};

export default Button;
