import React from "react";
import "./sectionTitle.css";

const SectionTitle = ({ text, title, location }) => {
  return (
    <div
      className="sectionTitle"
      style={{ textAlign: title, marginLeft: { location } }}
    >
      {text}
    </div>
  );
};

export default SectionTitle;
