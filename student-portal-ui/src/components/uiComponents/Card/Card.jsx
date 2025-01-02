import React from "react";
import "./Card.css";

function Card({ heading, description, children }) {
  return (
    <div className="card">
      {heading && <h3 className="card-heading">{heading}</h3>}
      {description && <p className="card-description">{description}</p>}
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;
