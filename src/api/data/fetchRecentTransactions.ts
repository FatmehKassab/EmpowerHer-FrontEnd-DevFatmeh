import axios from 'axios';
import { Transactions } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchRecentTransactions = async (): Promise<Transactions> => {
  try {
    const response = await axios.get(`${apiUrl}/api/recent-transactions`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch recent transactions");
  }
};
