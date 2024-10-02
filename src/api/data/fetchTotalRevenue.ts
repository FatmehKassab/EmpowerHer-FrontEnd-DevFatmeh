import axios from 'axios';
import { TotalRevenueData } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchTotalRevenue = async (token: string): Promise<TotalRevenueData> => {
  try {
    const response = await axios.get(`${apiUrl}/api/total-revenue`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const { total_revenue, comparison } = response.data;
    return { total_revenue, comparison };
  } catch (error) {
    throw new Error("Failed to fetch total revenue");
  }
};
