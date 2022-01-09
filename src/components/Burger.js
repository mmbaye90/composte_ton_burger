import React from "react";
import "../style/burger.css";

export default function Burger() {
  return (
    <div>
      <div className="ingredients">
        <div className="top">img</div>
        <p className="comp">composition</p>
        <div className="bottom">img</div>
      </div>
      <div className="menu">
        <h2>Salade</h2>
        <div className="containerbtn">
          <boutton className="add">Ajouter</boutton>
          <boutton className="supprimer">Supprimer</boutton>
        </div>
      </div>
    </div>
  );
}
