import { TotalRevenueData } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;


export const fetchTotalRevenue = async (): Promise<TotalRevenueData> => {
  const response = await fetch(`${apiUrl}/api/total-revenue`);
  if (!response.ok) throw new Error("Failed to fetch total revenue");

  const data = await response.json();
  return {
    total_revenue: data.total_revenue,  
    comparison: data.comparison,       
  };
};
