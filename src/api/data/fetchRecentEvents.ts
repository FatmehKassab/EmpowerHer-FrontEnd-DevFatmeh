import axios from 'axios';
import { RecentEvents } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_JWT_SECRET;

export const fetchRecentEvents = async (token: string): Promise<RecentEvents> => {
  try {
    const response = await axios.get(`${apiUrl}/api/recent-events`, {
      headers: {
        'Authorization': `Bearer ${token}`, 
      }
    });

    const { total, comparison, events } = response.data;
    return { total, comparison, events };
  } catch (error) {
    throw new Error("Failed to fetch recent events data");
  }
};
