import React from "react";
import { useSelector } from "react-redux";
function InfoCard({ data }) {
    const {selectedCountry} = useSelector(state => state.covidInfo)
    const date = new Date(data.date)
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dateFormatted = day + '/' +  month + '/' + year
    
    // card footer da kullanmak ıcın kart ısmını kucuk harfe cevırdık.
    const editName = data.name.toLowerCase()
    
    
  return (
    <div className="cardD p-1" style={{ width: "16rem", height: "18rem",backgroundColor:`${data.bg}` }}>
      <div className="card-header">
        <h5 className="title">{data.name}</h5>
      </div>
      <div className="card-body">
        <p className="value">{data.value.toLocaleString()}</p>
        <p className="date"><span className="fw-bold">Last Updated At:</span> <span>{dateFormatted}</span></p>
      </div>
      <div className="card-footer">
        <p className="">Number of {editName} from COVID-19 <span className="fw-bold">{selectedCountry.toUpperCase()}</span> </p>
      </div>
    </div>
  );
}

export default InfoCard;
