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
        data: [5, 25],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className=" w-[180px] h-auto">
      <Doughnut data={data} />
    </div>
  );
};

export default Chart2;
