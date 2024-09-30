import { TotalRevenueData } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchTotalRevenue = async (token: string): Promise<TotalRevenueData> => {
  const response = await fetch(`${apiUrl}/api/total-revenue`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, // Pass JWT token for authentication
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) throw new Error("Failed to fetch total revenue");

  const data = await response.json();
  return {
    total_revenue: data.total_revenue,
    comparison: data.comparison,
  };
};

