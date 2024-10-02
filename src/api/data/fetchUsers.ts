import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchUsers = async (token: string) => {
  try {
    const response = await axios.get(`${apiUrl}/api/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
