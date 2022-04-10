import React from "react";
import wallpaper from "../assets/wallpaperbetter.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${wallpaper})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Recursos</h1>
        <p>
        React: React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el 
        objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad
        de software libre. En el proyecto hay más de mil desarrolladores libres
        </p>
      </div>
    </div>
  );
}

export default About;
