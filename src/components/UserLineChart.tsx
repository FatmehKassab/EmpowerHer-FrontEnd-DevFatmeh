import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the data labels plugin
import Button from "./common/Button";
import { colors } from "../utils/theme";
import { useFetchUsers } from "../hooks";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const UserLineChart: React.FC = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI3ODczNTgxLCJleHAiOjE3Mjc5NTk5ODF9.PK_vWAfgMex1m7fLAn4uTs-luWT1kQ_nj7KqFREEDZk";
  const userData = useFetchUsers(token);
  const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Users",
        data: userData, // Example data for each weekday
        fill: false,
        borderColor: colors.primary, // Line color
        backgroundColor: "#FFFFFF", // Set point color to transparent (or omit this line)
        borderWidth: 2, // Set the line thickness
        tension: 0.1, // Smoothness of the line
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines
        },
        ticks: {
          color: colors.primary, // X-axis numbers color
        },
        border: {
          color: colors.primary, // Set x-axis color to white
        },
      },
      y: {
        beginAtZero: true, // Start y-axis at 0
        grid: {
          display: false, // Optional: add grid lines for clarity
        },
        ticks: {
          color: colors.primary, // Y-axis numbers color
        },
        border: {
          color: colors.primary, // Set x-axis color to white
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Show legend
        labels: {
          color: colors.primary, // Legend labels color
        },
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
        display: false,
      },
    },
  };

  return (
    <div className="flex justify-between flex-col">
      <div className="flexBetween">
        <h2 className="font-semibold text-text">User Retention</h2>
        <Button
          type="button"
          title="Daily"
          variantColor="btn-border "
          variantSize="btn-table"
          textColor="text-primary text-xs "
          onClick={() => alert("Button clicked!")}
        />
      </div>

      <div className="w-full h-auto">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default UserLineChart;
