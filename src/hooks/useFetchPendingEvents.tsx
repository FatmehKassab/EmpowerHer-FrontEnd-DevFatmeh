import { useEffect, useState } from "react";
import { fetchPendingEvents } from "../api/data/fetchPendingEvents";
import { MappedEvent } from "../types/types";

export const useFetchPendingEvents = () => {
  const [pendingEvents, setPendingEvents] = useState<MappedEvent[]>([]);

  useEffect(() => {
    const getPendingEvents = async () => {
      try {
        const data = await fetchPendingEvents();
        setPendingEvents(
          data.events.map((event) => ({
            name: event.name,
            dateTime: event.date_time,
            requestedBy: event.requested_by,
            response: "Pending",
          }))
        );
      } catch (error) {
        console.error("Error fetching pending events:", error);
      }
    };

    getPendingEvents();
  }, []);

  return { pendingEvents };
};
