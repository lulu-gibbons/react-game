import React from "react";
import "./style.css";

const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../img/" + props.image)} />
    </div>
  </div>
);

export default Card;
