import { useEffect, useState } from "react";
import { fetchTotalRevenue } from "../api/data/fetchTotalRevenue";

export const useFetchTotalRevenue = (token: string) => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [revenueChangePercentage, setRevenueChangePercentage] = useState("");
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState<null | string>(null); // To handle errors

  useEffect(() => {
    const getTotalRevenue = async () => {
      setLoading(true);
      try {
        const data = await fetchTotalRevenue(token); // Pass the token here
        setTotalRevenue(data.total_revenue);
        setRevenueChangePercentage(data.comparison);
      } catch (error) {
        setError("Error fetching total revenue");
        console.error("Error fetching total revenue:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      // Ensure the token is available before fetching
      getTotalRevenue();
    } else {
      setError("No token provided");
    }
  }, [token]);

  return { totalRevenue, revenueChangePercentage, loading, error };
};
