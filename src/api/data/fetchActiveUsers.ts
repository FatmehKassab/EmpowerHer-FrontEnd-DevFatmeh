import axios from 'axios';
import { ActiveUsersData } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;


export const fetchActiveUsers = async (): Promise<ActiveUsersData> => {
  try {
    const response = await axios.get(`${apiUrl}/api/active-users/monthly-comparison`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch active users data");
  }
};
