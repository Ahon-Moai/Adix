import React from "react";
import UsudPic from "../assets/Untitled.jpeg";
import "./card.css";
import InfoING from "./data";
import Infos from "./Infos";
function InfoCard() {
  return (
    <>
      {InfoING.map((item) => (
        <Infos key={2 + 1} item={item} />
      ))}
    </>
  );
}

export default InfoCard;
