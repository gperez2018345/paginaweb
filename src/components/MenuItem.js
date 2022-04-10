import React from "react";

function MenuItem({ image, name, languaje }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {languaje} </p>
    </div>
  );
}

export default MenuItem;
