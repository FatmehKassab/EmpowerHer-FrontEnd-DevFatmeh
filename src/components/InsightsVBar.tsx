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
import { colors } from "../utils/theme";
import { useFetchReservedEvents } from "../hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartDataLabels
);

const InsightsVBar: React.FC = () => {
  const { chartData, loading, error } = useFetchReservedEvents();
  const labels = ["Event 1", "Event 2", "Event 3", "Event 4"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Ticket Quantities",
        data: chartData,
        backgroundColor: colors.primary,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "x",
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: colors.primary,
        },
        border: {
          color: colors.primary,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: colors.primary,
        },
        border: {
          color: colors.primary,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": " + context.raw;
          },
        },
      },

      datalabels: {
        color: "#FFFFFF",
        anchor: "start",
        align: "end",
        formatter: (value: number) => value,
      },
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
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
