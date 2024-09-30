import { useEffect, useState } from "react";
import { fetchReservedEvents } from "../api/data/fetchReservedEvents";

const useFetchReservedEvents = () => {
  const [chartData, setChartData] = useState<number[]>(Array(4).fill(0)); // Assuming 4 events
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getReservedEvents = async () => {
      try {
        const reservedEvents = await fetchReservedEvents(); // Call the fetch function

        // Process the data to count ticket quantities for each event
        const ticketCounts = Array(4).fill(0); // Initialize ticket counts for 4 events

        reservedEvents.forEach((event: any) => {
          const eventId = event.event_id; // Assuming event_id is the identifier
          if (eventId >= 1 && eventId <= 4) {
            ticketCounts[eventId - 1] += event.ticket_quantity; // Increment based on event_id
          }
        });

        setChartData(ticketCounts); // Update state with ticket counts
      } catch (error) {
        setError((error as Error).message); // Set error state
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    getReservedEvents();
  }, []); // Run once on mount

  return { chartData, loading, error };
};

export default useFetchReservedEvents;
