// components/DonutMembership.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, ChartOptions } from "chart.js";
import { useFetchMembershipsStats } from "../hooks/useFetchMembershipsStats";

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const DonutMembership: React.FC = () => {
  const { chartData, loading, error } = useFetchMembershipsStats();

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flexCenter flex-col gap-2">
      <div className="w-[180px] h-auto">
        <Doughnut data={chartData} options={options} />
      </div>
      <h2 className="font-semibold text-text">Membership Stats</h2>

      {/* Display total memberships */}
      <div className="flexCenter flex-wrap flex-row gap-2 w-[80%]">
        {chartData.labels.map((label, index) => (
          <div key={label} className="flex items-center gap-1">
            <span
              className="w-3 h-3 px-2 rounded-sm"
              style={{
                backgroundColor: chartData.datasets[0].backgroundColor[index],
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
