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
import "./BarChart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  const labels = Object.keys(props.response);
  const values = Object.values(props.response);
  const month = props.month;
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: `Transactions BarChart -  ${month.name}`,
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        beginAtZero: true,
        ticks: {
          stepSize: 1, // Set the grid interval to 1 unit
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Sold Items",
        data: values.map((value) => value),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className=" bg d-flex justify-content-center">
      {labels.length != 0 ? (
        <Bar options={options} data={data} className="barchart"></Bar>
      ) : (
        <h1 className="text-center">Loading</h1>
      )}
    </div>
  );
};

export default BarChart;
