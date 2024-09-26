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

const InsightsVBar: React.FC = () => {
  const labels = ["Event 1", "Event 2", "Event 3", "Event 4"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Users",
        data: [36, 25, 45, 20],
        backgroundColor: "#AB2849", // Set bars color
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "x", // Ensure vertical chart by setting indexAxis to 'x'
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
          color: "#AB2849", // Set y-axis color to white
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
    <div className="flex justify-between flex-col ">
      <h2 className="font-semibold text-text">Insights</h2>

      <div className="w-full h-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default InsightsVBar;
