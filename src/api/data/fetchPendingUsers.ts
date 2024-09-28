import { MappedUser } from "../../types/types";


export const fetchPendingUsers = async (apiUrl: string): Promise<MappedUser[]> => {
  const response = await fetch(`${apiUrl}/api/pending-users/monthly-comparison`);
  if (!response.ok) {
    throw new Error("Error fetching pending users");
  }
  const data = await response.json();
  return data.pendingUsersCurrentMonthDetails;
};
