import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the data labels plugin

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartDataLabels
);

const GrowthHBar: React.FC = () => {
  const labels = ["Su", "Sa", "Fr", "Th", "We", "Tu", "Mo"];

  const data = {
    labels: labels,
    datasets: [
      {
        axis: "y", // Enables horizontal bars
        label: "Users",
        data: [36, 23, 27, 14, 45, 19, 31],
        backgroundColor: "#AB2849", // Set bars color to white
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y", // Ensure horizontal chart by setting indexAxis to 'y'
    responsive: true,
    scales: {
      x: {
        beginAtZero: true, // Start x-axis at 0
        grid: {
          display: false, // Remove grid lines
        },
        ticks: {
          color: "#AB2849", // Make x-axis numbers white
        },
        border: {
          color: "#AB2849", // Set x-axis color to white
        },
      },
      y: {
        grid: {
          display: false, // Remove grid lines
        },
        ticks: {
          color: "#AB2849", // Make y-axis numbers white
        },
        border: {
          color: "#AB2849", // Set x-axis color to white
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Remove legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": " + context.raw; // Display only the value on tooltip
          },
        },
      },
      // Enable data labels
      datalabels: {
        color: "#FFFFFF", // Set data label color to white
        anchor: "start",
        align: "end",
        formatter: (value: number) => value, // Display the value itself
      },
    },
  };

  return (
    <div>
      <h2 className="font-semibold text-text">User Growth</h2>
      <div className="flex items-center gap-1">
        <span className="w-3 h-3 px-2 rounded-sm bg-primary"></span>
        <span className="text-sm text-text">Users</span>
      </div>
      <div className="w-full h-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default GrowthHBar;
