import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
function Pies({ data }) {
  const charts = {
    labels: data
      .slice()
      .sort((a, b) => parseFloat(b.revenue) - parseFloat(a.revenue))
      .slice(0, 5)
      .map((item) => item.product),
    datasets: [
      {
        label: "Product",
        data: data
          .slice()
          .sort((a, b) => parseFloat(b.revenue) - parseFloat(a.revenue))
          .slice(0, 5)
          .map((item) => item.revenue),
        backgroundColor: [
          "#236CD1",
          "#377AD5",
          "#4C89DA",
          "#6298DE",
          "#8EB5E7",
        ],
        borderColor: ["#236CD1", "#377AD5", "#4C89DA", "#6298DE", "#8EB5E7"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    coutout: 0,
  };
  return (
    <div style={{ height: "100%", width: "75%" }}>
      <Doughnut data={charts} options={options} />
    </div>
  );
}

export default Pies;
