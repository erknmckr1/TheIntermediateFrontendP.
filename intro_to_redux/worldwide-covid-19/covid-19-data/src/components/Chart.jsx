import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";

function BarChart({data}) {
  const { selectedCountry,status,countryData } = useSelector((state) => state.covidInfo);
  const chartContainer = useRef();
  
  useEffect(() => {
    if (chartContainer && chartContainer.current && selectedCountry && status === 'succeeded'&& countryData) {
      const myChart = new Chart(chartContainer.current, {
        type: "bar",
        data: {
          labels: ["Infected", "Recovered", "Active", "Deaths"],
          datasets: [
            { label: "Infected", backgroundColor: "#EAF2F8", borderWidth: 2, data: data.length > 0 ? `${data[0].value}` : "" },
            { label: "Recovered", backgroundColor: "#E9F7EF", borderWidth: 2, data: data.length > 0 ? `${data[1].value}` : "" },
            { label: "Active", backgroundColor: "#FEF5E7", borderWidth: 2, data: data.length > 0 ? `${data[2].value}` : "" },
            { label: "Death", backgroundColor: "#F9EBEA", borderWidth: 2, data: data.length > 0 ? `${data[3].value}` : "" },
            
          ],
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
      });
      return () => {
        myChart.destroy();
      };
    };
  }, [selectedCountry, status, data]);
  return (
    <div>
      <canvas style={{ width: "20rem", height: "5rem" }} ref={chartContainer} />
    </div>
  );
}

export default BarChart;
