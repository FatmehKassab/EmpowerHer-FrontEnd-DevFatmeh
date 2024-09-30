import { PendingEvents } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;


export const fetchPendingEvents = async (token:string): Promise<PendingEvents> => {
  const response = await fetch(`${apiUrl}/api/pending-events`,{
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
    events: data.events
   
  };
};
