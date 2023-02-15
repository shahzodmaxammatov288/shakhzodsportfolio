import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Service from "../Service/Service";
import "./services.css";

const services = [
  {
    title: "web-sayt",
    desc: "Istalgan turdagi veb saytlarni yaratish",
    iconName: "fas fa-globe",
  },
  {
    title: "Seo xizmatlari",
    desc: "Web-saytingizni google, yandex kabi qidiruv tizimlarida chiqishni ta'minlash",
    iconName: "fas fa-search",
  },
  {
    title: "Kompyuter xizmatlari",
    desc: "Har qanday elektron shakldagi xizmatlarni bajarish",
    iconName: "fas fa-laptop",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <SectionTitle text="Xizmatlar" title="right" location="0" />
      <div className="container services-container">
        {services.map((service, idx) => {
          return (
            <Service
              key={idx}
              title={service.title}
              desc={service.desc}
              iconName={service.iconName}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
