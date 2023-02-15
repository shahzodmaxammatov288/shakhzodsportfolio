import React from "react";
import Form from "../Form/Form";
import Info from "../Info/Info";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SectionTitle text="Aloqa" title="right" location="0" />
      <div className="container contact-container">
        <Form />
        <Info />
      </div>
    </section>
  );
};

export default Contact;
