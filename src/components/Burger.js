import React from "react";
import "../style/burger.css";
import top from "../assets/top.jpg";
import bottom from "../assets/bottom.jpg";

export default function Burger() {
  return (
    <div>
      <div className="ingredients">
        <div className="top">
          <img src={top} alt={top} />
        </div>
        <p className="comp">composition</p>
        <div className="bottom">
          <img src={bottom} alt={bottom} />
        </div>
      </div>
      <div className="menu">
        <h2>Salade</h2>
        <div className="containerbtn">
          <boutton className="add">Ajouter</boutton>
          <boutton className="supprimer">Supprimer</boutton>
        </div>
        <h2>Sauce</h2>
        <div className="containerbtn">
          <boutton className="add">Ajouter</boutton>
          <boutton className="supprimer">Supprimer</boutton>
        </div>
        <h2>Fromage</h2>
        <div className="containerbtn">
          <boutton className="add">Ajouter</boutton>
          <boutton className="supprimer">Supprimer</boutton>
        </div>
        <h2>Steak</h2>
        <div className="containerbtn">
          <boutton className="add">Ajouter</boutton>
          <boutton className="supprimer">Supprimer</boutton>
        </div>
      </div>
    </div>
  );
}
