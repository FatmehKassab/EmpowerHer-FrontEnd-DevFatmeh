// components/DonutTickets.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import { colors } from "../utils/theme";
import { useFetchTicketsStatus } from "../hooks/useFetchTicketsStatus";

const DonutTickets: React.FC = () => {
  const { ticketData, loading } = useFetchTicketsStatus();

  if (loading || !ticketData) {
    return <div>Loading...</div>;
  }

  const data = {
    labels: ["Tickets Sold", "Tickets Remaining"],
    datasets: [
      {
        label: "Ticket Stats",
        data: [
          ticketData.total_tickets_sold,
          ticketData.total_tickets_remaining,
        ],
        backgroundColor: [colors.primary, colors.third],
        borderWidth: 0,
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

  const percentageSold = parseFloat(ticketData.percentage_sold);
  const percentageRemaining = parseFloat(ticketData.percentage_remaining);

  return (
    <div className="relative flex flex-col items-center gap-5">
      <div className="relative w-[180px] h-auto">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flexCenter">
          <span className="text-xl font-bold text-primary">
            {percentageSold}%
          </span>
        </div>
      </div>
      <div className="text-center pb-5 font-semibold">
        <p className="text-primary">
          Tickets Sold:{" "}
          <span className="text-text">
            {ticketData.total_tickets_sold} ({ticketData.percentage_sold})
          </span>
        </p>
        <p className="text-primary">
          Tickets Remaining:{" "}
          <span className="text-text">
            {ticketData.total_tickets_remaining} (
            {ticketData.percentage_remaining})
          </span>
        </p>
      </div>
    </div>
  );
};

export default DonutTickets;
