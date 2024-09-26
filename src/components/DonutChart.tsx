import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register the required components and plugin
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DonutChart: React.FC = () => {
  const data = {
    labels: ["Basic", "Elite", "Premium"],
    datasets: [
      {
        label: "Membership stats",
        data: [55, 25, 20],
        backgroundColor: ["#6A1B9A", "#AB2849", "#000000"],
        hoverOffset: 4,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        position: "bottom", // Moves the legend below the chart
      },
      datalabels: {
        color: "#fff", // White text for better contrast
        formatter: (value: number, context: any) => {
          const total = context.chart.data.datasets[0].data.reduce(
            (acc: number, val: number) => acc + val,
            0
          );
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          return percentage; // Display the percentage
        },
      },
    },
  };

  return (
    <div className="w-[180px] h-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
