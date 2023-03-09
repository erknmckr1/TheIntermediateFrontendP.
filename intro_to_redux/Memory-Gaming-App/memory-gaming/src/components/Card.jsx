import React from "react";

function Card({ card,handleChoose }) {
  const handleClick = ()=>{
    handleChoose(card)
  }
  return (
    <div className="card">
      <img src={card.src} alt="footballer card" />
      <img onClick={handleClick}  className="cover" src="./img/fifa21.png" alt="cover" />
    </div>
  );
}

export default Card;
