import axios from 'axios';
import { NewSignUps } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchNewlyRegisteredUsers = async (): Promise<NewSignUps> => {
  try {
    const response = await axios.get(`${apiUrl}/api/newly-registered-users-total-comparison`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch newly registered users");
  }
};
