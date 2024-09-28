// hooks/useFetchActiveUsers.js
import { useEffect, useState } from "react";
import { fetchActiveUsers } from "../api/data/fetchActiveUsers";

export const useFetchActiveUsers = () => {
  const [totalActiveUsers, setTotalActiveUsers] = useState(0);
  const [activeChangePercentage, setActiveChangePercentage] = useState("");

  useEffect(() => {
    const getActiveUsers = async () => {
      try {
        const data = await fetchActiveUsers();
        setTotalActiveUsers(data.TotalOfActiveUsers);
        setActiveChangePercentage(data.percentageChange);
      } catch (error) {
        console.error("Error fetching active users:", error);
      }
    };

    getActiveUsers();
  }, []);

  return { totalActiveUsers, activeChangePercentage };
};
