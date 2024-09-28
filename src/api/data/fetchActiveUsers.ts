import { ActiveUsersData } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchActiveUsers = async (): Promise<ActiveUsersData> => {
  const response = await fetch(`${apiUrl}/api/active-users/monthly-comparison`);
  if (!response.ok) throw new Error("Failed to fetch active users data");
  return response.json();
};

