import React from "react";
import { Bar } from "react-chartjs-2";
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
function Histogram_Chart({ data }) {
  const charts = {
    labels: data
      .slice()
      .sort((a, b) => parseFloat(b.revenue) - parseFloat(a.revenue))
      .slice(0, 10)
      .map((item) => item.product),
    datasets: [
      {
        label: "Product",
        data: data
          .slice()
          .sort((a, b) => parseFloat(b.revenue) - parseFloat(a.revenue))
          .slice(0, 10)
          .map((item) => item.revenue),
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
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Bar data={charts} />
    </div>
  );
}

export default Histogram_Chart;
