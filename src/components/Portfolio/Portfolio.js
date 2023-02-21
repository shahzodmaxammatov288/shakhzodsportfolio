import React from "react";
import Project from "../Project/Project";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./portfolio.css";

const projects = [
  {
    title: "Truck Dispatching",
    imgSrc: "/static/media/truck-dispatching.13ab1b8f96953a9145df.png",
    linkGithub: "https://github.com/shahzodmaxammatov288/truck-dispatching.git",
    linkSite: "https://truck-dispatching-by-shahzod.netlify.app/",
  },
  {
    title: "Food Delivery",
    imgSrc: "/static/media/food-delivery.f273959d7cd66b514cbc.png",
    linkGithub: "https://github.com/shahzodmaxammatov288/food-delivery.git",
    linkSite: "https://food-delivery-by-shakhzod-makhammatov.netlify.app/",
  },
  {
    title: "Luxury hotels",
    imgSrc: "/static/media/hotel.677368070f8415cbfe58.png",
    linkGithub: "https://github.com/shahzodmaxammatov288/hotel.git",
    linkSite: "https://shahzodmaxammatov288.github.io/hotel/",
  },
  {
    title: "Burger house",
    imgSrc: "/static/media/burger.6462dd5c574864d4ed35.png",
    linkGithub: "https://github.com/shahzodmaxammatov288/Burgur-house.uz.git",
    linkSite: "https://shahzodmaxammatov288.github.io/Burgur-house.uz/",
  },
  {
    title: "Korona Taxi",
    imgSrc: "/static/media/korona-taxi.d14050a866db41689d9c.png",
    linkGithub: "https://github.com/korona-taxi/korona-taxi.git",
    linkSite: "https://korona-taxi.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <SectionTitle text="Portfolio" title="right" location="0" />
      <div className="container portfolio-container">
        {projects.map((project, idx) => {
          return <Project key={idx} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
