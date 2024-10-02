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
import { useFetchUsers } from "../hooks";

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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI3ODczNTgxLCJleHAiOjE3Mjc5NTk5ODF9.PK_vWAfgMex1m7fLAn4uTs-luWT1kQ_nj7KqFREEDZk";
  const userData = useFetchUsers(token);
  const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const data = {
    labels: labels,
    datasets: [
      {
        axis: "y",
        label: "Users",
        data: userData,
        backgroundColor: colors.primary,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
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
      // Enable data labels
      datalabels: {
        color: "#FFFFFF",
        anchor: "start",
        align: "end",
        formatter: (value: number) => value,
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
