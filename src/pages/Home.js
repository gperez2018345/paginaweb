import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/fondo.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> LevelUp Pool </h1>
        <p> Desarrollador React | Gerardo Perez</p>
        <Link to="/about">
          <button> Recursos </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
