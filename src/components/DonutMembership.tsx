import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, ChartOptions } from "chart.js";
import { colors } from "../utils/theme";

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const DonutMembership: React.FC = () => {
  const data = {
    labels: ["Basic", "Premium", "Elite"],
    datasets: [
      {
        label: "Membership stats",
        data: [55, 25, 20],
        backgroundColor: [
          colors.primary, // Using colors from the theme
          colors.iconC3,
          colors.black,
        ],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#fff",
        formatter: (value: number, context: any) => {
          const total = context.chart.data.datasets[0].data.reduce(
            (acc: number, val: number) => acc + val,
            0
          );
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          return percentage;
        },
      },
    },
  };

  return (
    <div className="flexCenter flex-col gap-2 ">
      <div className="w-[180px] h-auto">
        <Doughnut data={data} options={options} />
      </div>
      <h2 className="font-semibold text-text">Membership Stats</h2>
      <div className="flexCenter flex-wrap flex-row gap-2 w-[80%]">
        {data.labels.map((label, index) => (
          <div key={label} className="flex items-center gap-1">
            <span
              className="w-3 h-3 px-2 rounded-sm"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index], // Dynamic color
              }}
            ></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutMembership;
