import React from "react";
import usudPic from "../assets/Untitled.jpeg";
function Infos({ item }) {
  let { name, des } = item;
  return (
    <div className="w-full h-full flex flex-col">
      <div className="card-container shadow-2xl ">
        <img src={usudPic} className="shadow-2xl" alt="/" />
        <div className="content">
          <h1>
            <span className="font-serif font-bold">Name: </span>Omidon
          </h1>
          <p className="">
            <span className="font-serif font-bold">Description: </span>Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Minus fugit,
            magnam delectus, quas voluptatibus inventore libero quidem sed
            facere reiciendis id iure architecto velit voluptates perspiciatis
            ipsam doloribus voluptate natus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Infos;
