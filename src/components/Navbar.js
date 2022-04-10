import React, { useState } from "react";
import Logo from "../assets/react.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Inicio </Link>
          <Link to="/menu"> Mis Proyectos </Link>
          <Link to="/about"> Recursos </Link>
          <Link to="/contact"> Contactar </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Inicio </Link>
        <Link to="/menu"> Mis Proyectos </Link>
        <Link to="/about"> Recursos </Link>
        <Link to="/contact"> Contactar </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
