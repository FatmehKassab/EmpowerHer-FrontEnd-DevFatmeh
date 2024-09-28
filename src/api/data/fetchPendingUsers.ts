import { PendingUsers } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;


export const fetchPendingUsers = async (): Promise<PendingUsers> => {
  const response = await fetch(`${apiUrl}/api/pending-users/monthly-comparison`);
  if (!response.ok) throw new Error("Failed to fetch pending users");
  return response.json();
};