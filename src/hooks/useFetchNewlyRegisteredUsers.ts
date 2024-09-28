import { useEffect, useState } from "react";
import { fetchNewlyRegisteredUsers } from "../api/data/fetchNewlyRegisteredUsers";
import { User } from "../types/types";

export const useFetchNewlyRegisteredUsers = () => {
    const [signUpsData, setSignUpsData] = useState<User[]>([]);
    const [changePercentage, setChangePercentage] = useState<string>("");
    const [change, setChange] = useState<string>("");
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
      const getNewlyRegisteredUsers = async () => {
        try {
          const data = await fetchNewlyRegisteredUsers();
          setSignUpsData(
            data.users.map((user) => ({
              name: user.name,
              date: user["Date Registered"],
            }))
          );
          setTotal(data.total);
          setChange(
            data["percentage of comparison between current month and previous month"]
          );
        } catch (error) {
          console.error("Error fetching total signups:", error);
        }
      };

      getNewlyRegisteredUsers();
  
    }, []);
  
    return {

      signUpsData,
      changePercentage,
      change,
      total,
      
    };
  };