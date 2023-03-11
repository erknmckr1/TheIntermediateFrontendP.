import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { shuffleCards } from "../redux/CardsSlice";
import "./components.css";
function Header() {
  const dispatch = useDispatch();
  const {point,cards,turn} = useSelector((state) => state.cardsSlice);

  return (
    <div className="header">
      {cards.length < 25 ? <h2>Football Player Match</h2> : ""}

      <div className="header_bar">
        <button onClick={() => dispatch(shuffleCards())}>Start Match</button>
        <div className="score_table">
        <span>Skor : {point}</span>
        <span>Turn : {turn}</span>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
