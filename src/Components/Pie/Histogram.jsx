import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { products } from "../UserInfo/Products";
ChartJS.register(ArcElement, Tooltip, Legend);
function Pies() {
  const data = {
    labels: products
      .sort((a, b) => b.data - a.data)
      .slice(0, 5)
      .map((item) => item.key),
    datasets: [
      {
        label: "Product",
        data: products
          .sort((a, b) => b.data - a.data)
          .slice(0, 5)
          .map((item) => item.data),
        backgroundColor: [
          "#236CD1",
          "#377AD5",
          "#4C89DA",
          "#6298DE",
          "#8EB5E7",
        ],
        borderColor: [
          "#236CD1",
          "#377AD5",
          "#4C89DA",
          "#6298DE",
          "#8EB5E7",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    coutout: 0,
  };
  return (
    <div style={{ height: "500px", width: "500px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default Pies;
