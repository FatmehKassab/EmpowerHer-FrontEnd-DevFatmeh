import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchReservedEvents = async (): Promise<any[]> => {
  try {
    const response = await axios.get(`${apiUrl}/api/reserved_events`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch reserved events");
  }
};
