import { ApiResponse } from "../../types/types";


export const fetchNewlyRegisteredUsers = async (url: string): Promise<ApiResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching newly registered users");
  }
  return await response.json();
};
