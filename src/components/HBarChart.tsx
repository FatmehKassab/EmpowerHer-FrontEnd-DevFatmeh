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
  ChartOptions,
} from "chart.js";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HBarChart: React.FC = () => {
  const labels = ["Su", "Sa", "Fr", "Th", "We", "Tu", "Mo"];

  const data = {
    labels: labels,
    datasets: [
      {
        axis: "y", // Enables horizontal bars
        label: "Users",
        data: [36, 23, 27, 14, 45, 19, 31],
        backgroundColor: "#AB2849",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y", // Ensure horizontal chart by setting indexAxis to 'y'
    responsive: true,
    scales: {
      x: {
        beginAtZero: true, // Start x-axis at 0
      },
    },
    plugins: {
      legend: {
        position: "top", // You can set legend position as needed
      },
      title: {
        display: true,
        text: "User growth", // Title of the chart
      },
    },
  };

  return (
    <div className=" w-full h-auto">
      <Bar data={data} options={options} />
    </div>
  );
};

export default HBarChart;
