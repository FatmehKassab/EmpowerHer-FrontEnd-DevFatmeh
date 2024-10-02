import axios from 'axios';
import { PendingEvents } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchPendingEvents = async (token: string): Promise<PendingEvents> => {
  try {
    const response = await axios.get(`${apiUrl}/api/pending-events`, {
      headers: {
        'Authorization': `Bearer ${token}`, // Pass JWT token for authentication
        'Content-Type': 'application/json'
      }
    });

    const { total, events } = response.data;
    return { total, events };
  } catch (error) {
    throw new Error("Failed to fetch pending events data");
  }
};
