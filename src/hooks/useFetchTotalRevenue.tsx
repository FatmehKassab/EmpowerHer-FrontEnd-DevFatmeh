import { useEffect, useState } from "react";
import { fetchTotalRevenue } from "../api/data/fetchTotalRevenue";

export const useFetchTotalRevenue = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [revenueChangePercentage, setRevenueChangePercentage] = useState("");

  useEffect(() => {
    const getTotalRevenue = async () => {
      try {
        const data = await fetchTotalRevenue();
        setTotalRevenue(data.total_revenue);
        setRevenueChangePercentage(data.comparison);
      } catch (error) {
        console.error("Error fetching total revenue:", error);
      }
    };

    getTotalRevenue();
  }, []);

  return { totalRevenue, revenueChangePercentage };
};
