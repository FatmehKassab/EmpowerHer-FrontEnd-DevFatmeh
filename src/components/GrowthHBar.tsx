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
import ChartDataLabels from "chartjs-plugin-datalabels";
import Button from "./common/Button";
import { colors } from "../utils/theme";

import useFetchUsers from "../hooks/useFetchUsers";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartDataLabels
);

const GrowthHBar: React.FC = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI3Njk5MTc1LCJleHAiOjE3Mjc3ODU1NzV9.LFMnctCtSQq61zpdr3r1_PwhzdU5J7elVD7M41rWpfI";
  const userData = useFetchUsers(token); // Use the custom hook
  const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const data = {
    labels: labels,
    datasets: [
      {
        axis: "y", // Enables horizontal bars
        label: "Users",
        data: userData, // Use the fetched user data
        backgroundColor: colors.primary, // Using colors from the theme
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
          color: colors.primary, // Make x-axis numbers white
        },
        border: {
          color: colors.primary, // Set x-axis color to white
        },
      },
      y: {
        grid: {
          display: false, // Remove grid lines
        },
        ticks: {
          color: colors.primary, // Make y-axis numbers white
        },
        border: {
          color: colors.primary, // Set x-axis color to white
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
      <div className="flexBetween">
        <h2 className="font-semibold text-text">User Growth</h2>
        <Button
          type="button"
          title="Daily"
          variantColor="btn-border "
          variantSize="btn-table"
          textColor="text-primary text-xs "
          onClick={() => alert("Button clicked!")}
        />
      </div>

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
