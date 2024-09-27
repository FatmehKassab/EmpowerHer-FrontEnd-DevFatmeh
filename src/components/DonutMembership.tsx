// DonutMembership.tsx
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, ChartOptions } from "chart.js";
import { colors } from "../utils/theme"; // Adjust the path based on your project structure
import { MembershipStatsResponse } from "../types/types";
import { fetchMembershipStats } from "../api/data/membershipsStatsApi";

// Register chart plugins
ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const DonutMembership: React.FC = () => {
  const [chartData, setChartData] = useState({
    labels: ["Basic", "Corporate", "Individual"],
    datasets: [
      {
        label: "Membership stats",
        data: [0, 0, 0], // Initial data
        backgroundColor: [colors.primary, colors.iconC3, colors.black],
        borderWidth: 0,
      },
    ],
  });
  const [totalMemberships, setTotalMemberships] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const apiData: MembershipStatsResponse = await fetchMembershipStats();
      console.log("Full API Response:", apiData); // To verify structure in console

      // Ensure the expected data structure is present
      if (apiData && apiData.basic && apiData.corporate && apiData.individual) {
        // Convert percentage strings to numbers for chart data
        const basicValue = parseFloat(apiData.basic);
        const corporateValue = parseFloat(apiData.corporate);
        const individualValue = parseFloat(apiData.individual);

        // Update chart data
        setChartData({
          labels: ["Basic", "Corporate", "Individual"],
          datasets: [
            {
              ...chartData.datasets[0],
              data: [basicValue, corporateValue, individualValue],
            },
          ],
        });

        // Set the total memberships value
        setTotalMemberships(apiData.totalMemberships);
        setLoading(false);
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error: any) {
      console.error("Error fetching membership stats:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

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
