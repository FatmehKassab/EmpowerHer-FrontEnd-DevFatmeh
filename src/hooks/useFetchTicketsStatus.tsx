import { useState, useEffect } from "react";

import { TicketStatus } from "../types/types";
import { fetchTicketsStatus } from "../api/data/fetchTicketsStatus";

export const useFetchTicketsStatus = () => {
  const [ticketData, setTicketData] = useState<TicketStatus | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTicketsStatus();
        setTicketData(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { ticketData, loading, error };
};
