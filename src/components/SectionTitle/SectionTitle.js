import React from "react";
import "./sectionTitle.css";

const SectionTitle = ({ text, title, location }) => {
  return (
    <div
      data-aos="fade-up"
      className="sectionTitle"
      style={{ textAlign: title, marginLeft: location }}
    >
      {text}
    </div>
  );
};

export default SectionTitle;
