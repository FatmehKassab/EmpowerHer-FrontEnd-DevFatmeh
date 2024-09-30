import axios from "axios";
import { MembershipStatsResponse } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchMembershipStats = async (): Promise<MembershipStatsResponse> => {
  try {
   
    const response = await axios.get<MembershipStatsResponse>(`${apiUrl}/api/memberships-stats`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to load data: ${error.message}`);
  }
};
