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

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface EventBarChartProps {
  labels: string[]; // Labels for the events
  data: number[]; // Data points for the events
}

const VBarChart: React.FC<EventBarChartProps> = ({ labels, data }) => {
  // Data for the chart
  const chartData = {
    labels: labels, // Event names
    datasets: [
      {
        label: "Event Attendance", // You can change this label as needed
        data: data, // Event data passed as props
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Background colors for each bar
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at 0
      },
    },
    plugins: {
      legend: {
        position: "top", // Adjust the position of the legend
      },
      title: {
        display: true,
        text: "Event Attendance", // Title of the chart
      },
    },
  };

  return (
    <div className="w-full h-auto">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default VBarChart;
