import React from "react";
import Form from "../Form/Form";
import Info from "../Info/Info";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <SectionTitle text="Aloqa" title="left" location="auto" />
      <div className="container contact-container">
        <Form />
        <Info />
      </div>
    </section>
  );
};

export default Contact;
