import { useEffect, useState } from "react";
import { fetchUsers } from "../api/data/fetchUsers";

export const useFetchUsers = (token: string) => {
  const [userData, setUserData] = useState<number[]>(Array(7).fill(0));

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers(token); // Call the fetch function

        const userCounts = Array(7).fill(0); // Array to hold user counts for each day

        users.forEach((user: any) => {
          const createdAt = new Date(user.createdAt);
          const dayIndex = (createdAt.getUTCDay() + 6) % 7; // Adjust for Sunday (0) to be the last index (6)
          userCounts[dayIndex]++;
        });

        setUserData(userCounts); // Update state with user counts
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, [token]); // Add token to dependency array if it changes

  return userData;
};
