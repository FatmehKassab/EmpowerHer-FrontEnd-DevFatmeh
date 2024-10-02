import axios from 'axios';
import { PendingUsers } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchPendingUsers = async (): Promise<PendingUsers> => {
  try {
    const response = await axios.get(`${apiUrl}/api/pending-users/monthly-comparison`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch pending users");
  }
};
