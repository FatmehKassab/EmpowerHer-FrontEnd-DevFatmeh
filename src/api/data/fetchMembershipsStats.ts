// fetchData.ts
import axios from "axios";
import { MembershipStatsResponse } from "../../types/types";


export const fetchMembershipStats = async (): Promise<MembershipStatsResponse> => {
  try {
    const response = await axios.get<MembershipStatsResponse>(
      "http://localhost:8080/api/memberships-stats"
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to load data: ${error.message}`);
  }
};
