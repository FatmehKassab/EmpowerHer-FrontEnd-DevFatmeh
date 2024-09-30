import { PendingEvents } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchPendingEvents = async (): Promise<PendingEvents> => {
  const response = await fetch(`${apiUrl}/api/pending-events`);
  if (!response.ok) throw new Error("Failed to fetch pending events data");
  return response.json();
};
