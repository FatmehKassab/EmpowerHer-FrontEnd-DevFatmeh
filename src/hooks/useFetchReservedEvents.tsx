import { useEffect, useState } from "react";
import { fetchReservedEvents } from "../api/data/fetchReservedEvents";

export const useFetchReservedEvents = () => {
  const [chartData, setChartData] = useState<number[]>(Array(4).fill(0));
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getReservedEvents = async () => {
      try {
        const reservedEvents = await fetchReservedEvents();

        const ticketCounts = Array(4).fill(0);

        reservedEvents.forEach((event: any) => {
          const eventId = event.event_id;
          if (eventId >= 1 && eventId <= 4) {
            ticketCounts[eventId - 1] += event.ticket_quantity;
          }
        });

        setChartData(ticketCounts);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getReservedEvents();
  }, []);

  return { chartData, loading, error };
};
