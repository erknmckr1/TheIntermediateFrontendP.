import axios from "axios";
import "./detail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { charId } = useParams();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${charId}`, {
        cache: false,
      })
      .then((res) => res.data)
      .then((data) => {
        setChar(data);
      })
      .finally(()=>{setLoading(false)});
  }, [charId]);
  console.log(char);
  return (
    <div className="container">
      <h1 className="title">Character Detail</h1>
      <p className="detail_p">
        Detay sayfasına gırdıgımız de bız verıyı chache den alabılırız fakat
        details sayfasını yenıdledıgımız zaman onbellekten verıler sılınecek.
        Bız bu sayfada tekrardan bı fetch ıslemı yapalım karakter bılgılerı
        sureklı gelsın.
      </p>
      {char && (
        <div className="card" style={{ width: 250 }}>
          <img className="card-img-top" src={char.image} />
          <div className="card-body"></div>
          <h3>{char.name}</h3>
          <p>Status : {char.status}</p>
          <p>Species : {char.species}</p>
          <p>Gender : {char.gender}</p>
          <small>Location : {char.location.name}</small>
        </div>
      )}
    </div>
  );
}

export default Detail;
