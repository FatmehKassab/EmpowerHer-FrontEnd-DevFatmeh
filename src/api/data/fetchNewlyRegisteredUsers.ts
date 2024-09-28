import { NewSignUps } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;



export const fetchNewlyRegisteredUsers = async (): Promise<NewSignUps> => {
    const response = await fetch(`${apiUrl}/api/newly-registered-users-total-comparison`);
  if (!response.ok) throw new Error("Failed to fetch newly registered users");
  return response.json();
};