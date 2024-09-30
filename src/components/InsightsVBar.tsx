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
import { colors } from "../utils/theme";
import useFetchReservedEvents from "../hooks/useFetchReservedEvents";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartDataLabels
);

const InsightsVBar: React.FC = () => {
  const { chartData, loading, error } = useFetchReservedEvents(); // Use the custom hook
  const labels = ["Event 1", "Event 2", "Event 3", "Event 4"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Ticket Quantities",
        data: chartData, // Use the processed data
        backgroundColor: colors.primary, // Set bars color
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
          color: colors.primary, // Set y-axis color to white
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

  // Render loading or error messages if applicable
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner component if desired
  }

  if (error) {
    return <div>Error fetching data: {error}</div>; // Display error message
  }

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
