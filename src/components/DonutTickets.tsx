import { ChartOptions } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { colors } from "../utils/theme";

const DonutTickets: React.FC = () => {
  const data = {
    labels: ["Basic", "Premium"],
    datasets: [
      {
        label: "Membership stats",
        data: [25, 75],
        backgroundColor: [
          colors.third,
          colors.primary, // Using colors from the theme
        ],
        borderWidth: 0, // Remove border width
        hoverOffset: 4,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: { display: false },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center gap-5">
      <div className="relative w-[180px] h-auto">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flexCenter">
          <span className="text-xl font-bold text-primary">75%</span>{" "}
          {/* Center percentage */}
        </div>
      </div>
      <div className="text-center pb-5 font-semibold">
        <p className="text-primary">
          Tickets Sold: <span className="text-text">500 (75%)</span>{" "}
        </p>
        <p className="text-primary">
          Tickets Remaining: <span className="text-text">125 (25%)</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default DonutTickets;
