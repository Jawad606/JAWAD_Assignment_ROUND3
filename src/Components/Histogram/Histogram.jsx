import React from "react";
import { Bar } from "react-chartjs-2";
import { products } from "../UserInfo/Products";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Histogram_Chart() {
  const data = {
    labels: products
      .sort((a, b) => b.data - a.data)
      .slice(0, 10)
      .map((item) => item.key),
    datasets: [
      {
        label: "Product",
        data: products
          .sort((a, b) => b.data - a.data)
          .slice(0, 10)
          .map((item) => item.data),
        backgroundColor: [
          "#236CD1",
          "#377AD5",
          "#4C89DA",
          "#5C92D8",
          "#5E93D9",
          "#8AB1E3",
          "#A0BFE7",
          "#B0C7E6",
          "#CCDBEF",
          "#E1E9F3",
        ],
        borderColor: [
          "#236CD1",
          "#377AD5",
          "#4C89DA",
          "#5C92D8",
          "#5E93D9",
          "#8AB1E3",
          "#A0BFE7",
          "#B0C7E6",
          "#CCDBEF",
          "#E1E9F3",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div>
        <Bar data={data} style={{ height: "700px", width: "500px" }} />
      </div>
    </div>
  );
}

export default Histogram_Chart;
