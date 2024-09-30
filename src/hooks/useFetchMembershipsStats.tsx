// hooks/useMembershipStats.ts
import { useState, useEffect } from "react";
import { MembershipStatsResponse } from "../types/types";
import { fetchMembershipStats } from "../api/data/fetchMembershipsStats";
import { colors } from "../utils/theme";

export const useFetchMembershipsStats = () => {
  const [chartData, setChartData] = useState({
    labels: ["Basic", "Corporate", "Individual"],
    datasets: [
      {
        label: "Membership stats",
        data: [0, 0, 0],
        backgroundColor: [colors.primary, colors.iconC3, colors.black],
        borderWidth: 0,
      },
    ],
  });
  const [totalMemberships, setTotalMemberships] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData: MembershipStatsResponse = await fetchMembershipStats();

        if (
          apiData &&
          apiData.basic &&
          apiData.corporate &&
          apiData.individual
        ) {
          const basicValue = parseFloat(apiData.basic);
          const corporateValue = parseFloat(apiData.corporate);
          const individualValue = parseFloat(apiData.individual);

          setChartData({
            labels: ["Basic", "Corporate", "Individual"],
            datasets: [
              {
                ...chartData.datasets[0],
                data: [basicValue, corporateValue, individualValue],
              },
            ],
          });
          setTotalMemberships(apiData.totalMemberships);
        } else {
          throw new Error("Unexpected API response structure");
        }
      } catch (error: any) {
        console.error("Error fetching membership stats:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { chartData, totalMemberships, loading, error };
};
