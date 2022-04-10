import React from "react";
import Contacto from "../assets/contact.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Contacto})` }}
      ></div>
      <div className="rightSide">
        <h1>Contáctanos</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre Completo:</label>
          <input name="name" placeholder="Nombre completo..." type="text" />
          <label htmlFor="email">Email:</label>
          <input name="email" placeholder="Email..." type="email" />
          <label htmlFor="message">Mensaje:</label>
          <textarea
            rows="6"
            placeholder="Redactar Mensaje..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
