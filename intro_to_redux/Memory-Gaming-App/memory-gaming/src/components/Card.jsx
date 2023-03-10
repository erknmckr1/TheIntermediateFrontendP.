import React from "react";

import { useDispatch,useSelector } from "react-redux";
import { chooseCard } from "../redux/CardsSlice";

function Card({ card}) {
  const dispatch = useDispatch()
    const {isDisabled,chooseFirst, chooseSecond} = useSelector((state)=>state.cardsSlice)

    
  

  const handleClick = ()=>{
    if(!isDisabled){
      dispatch(chooseCard(card))
    }
    
  }
  return (
    <div className={`card ${card.matched ? 'matched' : ''}`}>
      <div className={(card===chooseFirst || card===chooseSecond || card.matched) ? "flipp" :""}>
      <img className="frontImg" src={card.src} alt="footballer card" />
      <img onClick={handleClick}  className="coverImg" src="./img/fifa21.png" alt="cover" />
      </div>
    </div>
  );
}

export default Card;
