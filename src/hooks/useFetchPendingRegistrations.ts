import { useEffect, useState } from "react";
import { fetchPendingUsers } from "../api/data/fetchPendingUsers";
import { MappedUser } from "../types/types";

export const useFetchPendingRegistrations = () => {
    const [totalPendingReg, setTotalPendingReg] = useState<number>(0);
    const [pendingRegChangePercentage, setPendingRegChangePercentage] = useState<string>("");
    const [pendingUsersCurrentMonthDetails, setPendingUsersCurrentMonthDetails] = useState<MappedUser[]>([]);

  useEffect(() => {
    const getPendingRegistrations = async () => {
        try {
          const data = await fetchPendingUsers();
          setTotalPendingReg(data.pendingUsersCurrentMonth);
          setPendingRegChangePercentage(data.percentageChange);
          setPendingUsersCurrentMonthDetails(data.pendingUsersCurrentMonthDetails);
        } catch (error) {
          console.error("Error fetching pending registrations:", error);
        }
      };

      getPendingRegistrations();
  }, []);

  return {  
    totalPendingReg,
    pendingRegChangePercentage,
    pendingUsersCurrentMonthDetails
  };
};
