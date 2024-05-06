import React from "react";
import Dazzling from "../../assets/dazzling.png";
import DubaiDream from "../../assets/dream.png";
import Dunes from "../../assets/dunes.png";
import DubaiDaz from "../../assets/dubaidaz.png";
import "./Card.css";
const Card = () => {
  const data = [
    {
      img: Dazzling,
      title: "Dream Escapade",
      package: "Standard",
    },
    {
      img: DubaiDream,
      title: "Splendors Of Abu Dhabi",
      package: "Standard",
    },
    {
      img: Dunes,
      title: "Dunes & Desert Adventure",
      package: "Standard",
    },
    {
      img: DubaiDaz,

      title: "Dazzling Dubai Deleight",
      package: "Standard",
    },
  ];

  return (
    <div className="cardContainer">
      {data.map((data, index) => (
        <div key={index} className="card">
          <img className="imgCard" src={data.img} alt="NA" />

          <h3 className="cardtitle">{data.title}</h3>
          <div className="cardpackage">{data.package}</div>
        </div>
      ))}
    </div>
  );
};
export default Card;
