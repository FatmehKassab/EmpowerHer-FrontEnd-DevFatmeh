// fetchData.ts
import axios from "axios";
import {TicketStatus } from "../../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchTicketsStatus = async (): Promise<TicketStatus> => {
  try {
   
    const response = await axios.get<TicketStatus>(`${apiUrl}/api/tickets-sold-remaining-count-percentage`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to load data: ${error.message}`);
  }
};
