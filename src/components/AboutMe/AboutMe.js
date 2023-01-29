import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./aboutMe.css";
import myImg from "../../assets/images/my-img.jpg";
import Button from "../Generic/Button/Button";

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <SectionTitle text="Men haqimda" title="right" marginLeft="0" />
      <div className="container aboutMe-container">
        <div className="aboutMe__left">
          <img className="my-img" src={myImg} alt="Mening rasmim" />
        </div>
        <div className="aboutMe__right">
          <h2 className="aboutMe__name">
            <em>
              Shahzod <br />
              Maxammatov
            </em>
          </h2>
          <p className="aboutMe__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            aliquid totam sit ipsa fuga vitae voluptates vel autem voluptas.
            Recusandae, cumque expedita perferendis ducimus, rem nemo saepe
            corrupti unde eum ipsum animi maiores? Inventore rerum itaque aut
            neque facilis? Assumenda minima corrupti sapiente, rerum, ullam
            quidem fuga modi deserunt sequi nesciunt obcaecati ipsum iure
            voluptatibus, eius laborum fugiat harum cum aperiam repudiandae
            quam! Dicta doloribus sequi ipsam, dolorum reiciendis quibusdam
            illum dignissimos ullam magni libero.
          </p>
          <div className="aboutMe__btns">
            <Button
              href="tel:998901929900"
              text="Aloqa"
              styleLink="btn-light"
              iconLink={<i className="fa-solid fa-phone"></i>}
            />
            <Button
              href=""
              text="Rezyume"
              target="_blank"
              styleLink="btn-primary"
              iconLink={<i className="fa fa-cloud-arrow-down"></i>}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
