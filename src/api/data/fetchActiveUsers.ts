import { ActiveUsersData } from "../../types/types";


export const fetchActiveUsers = async (apiUrl: string): Promise<ActiveUsersData> => {
  const response = await fetch(`${apiUrl}/api/active-users/monthly-comparison`);
  if (!response.ok) {
    throw new Error("Error fetching active users");
  }
  return await response.json();
};
