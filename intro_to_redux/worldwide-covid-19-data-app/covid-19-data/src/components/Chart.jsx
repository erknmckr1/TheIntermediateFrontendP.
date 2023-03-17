import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";

function BarChart({data}) {
  const { selectedCountry,status,countryData } = useSelector((state) => state.covidInfo);
  const chartContainer = useRef();

  // chart'ta max degerı gonderıdıgımız data ıcınden belırledık. mevcut degerın %20 fazlasını chart da xmax a verdık. 
  const maxValue = data  ?  Math.max(...data.map(item=>item.value)) : ""
  const chartMaxValue = maxValue ?  Math.floor((maxValue * 0.2) + maxValue) : ""

  
  useEffect(() => {
    if (chartContainer && chartContainer.current && selectedCountry && status === 'succeeded'&& countryData) {
      const myChart = new Chart(chartContainer.current, {
        type: "bar",
        data: {
          labels: ["Covid-19 Data",],
          datasets: [
            { label: "Infected", backgroundColor: "#EAF2F8", data: data.length > 0 ? [data[0].value] : [] },
            { label: "Recovered", backgroundColor: "#E9F7EF",  data: data.length > 0 ? [data[1].value] : [] },
            { label: "Active", backgroundColor: "#FEF5E7",  data: data.length > 0 ? [data[2].value] : [] },
            { label: "Death", backgroundColor: "#F9EBEA", data: data.length > 0 ? [data[3].value] : [] },
          ],
        },
        options: {
          responsive:true,
          maintainAspectRatio:false, // chart otomatik olarak parent dıvın boyutlarında olur. 
            scales: {
              y: {
                min:0,
                max:chartMaxValue,
                stepSize:15,
              }
            },
            plugins: {
              legend: {
                position: 'top',
                align: 'center',
                labels: {
                  boxWidth: 3,
                  usePointStyle: true
                }
              }
            },
          },
      });
      return () => {
        myChart.destroy();
      };
    };
  }, [selectedCountry, status, data,countryData,chartMaxValue]);
  return (
    <div className="chart">
      <div style={{ width: "40rem", height: "15rem" }} >
      <canvas  ref={chartContainer} />
      </div>
     
    </div>
  );
}

export default BarChart;
