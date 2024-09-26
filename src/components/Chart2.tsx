import React from "react";
import { Doughnut } from "react-chartjs-2";

// Define your custom colors
const tailwindColors = {
  basic: "#AB2849", // Primary
  elite: "#6A1B9A", // Purple
  premium: "#000000", // Black
};

const Chart2: React.FC = () => {
  const data = {
    labels: ["Basic", "Premium"],
    datasets: [
      {
        label: "Membership stats",
        data: [25, 75],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-[75%] h-auto">
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: { display: false },
            },
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">75%</span>
        </div>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">Tickets Sold: 500</h2>
        <p className="text-lg">Tickets Remaining: 125</p>
      </div>
    </div>
  );
};

export default Chart2;
