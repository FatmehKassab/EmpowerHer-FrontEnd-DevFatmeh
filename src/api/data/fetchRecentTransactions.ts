
import { Transactions } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;




export const fetchRecentTransactions = async (): Promise<Transactions> => {
const response = await fetch(`${apiUrl}/api/recent-transactions`);
  if (!response.ok) throw new Error("Failed to fetch recent transactions");
  return response.json();
};
