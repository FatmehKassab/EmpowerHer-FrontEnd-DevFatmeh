import {  RecentEvents } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchRecentEvents = async (token:string): Promise<RecentEvents> => {
  const response = await fetch(`${apiUrl}/api/recent-events`,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, // Pass JWT token for authentication
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) throw new Error("Failed to fetch pending events data");
  const data = await response.json();
  return {
    total: data.total,
    comparison:data.comparison,
    events: data.events
   
  };
};
