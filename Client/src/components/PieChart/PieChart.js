import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";
ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Transactions PieChart",
      font: {
        size: 16,
      },
    },
  },
};

const PieChart = (props) => {
  const labels = props.response.map((label) => label._id);
  const count = props.response.map((label) => label.count);
  const data = {
    labels: labels,
    datasets: [
      {
        legend: {
          position: "right",
        },
        label: "No. Item Sold",
        data: count,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg d-flex justify-content-center">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
