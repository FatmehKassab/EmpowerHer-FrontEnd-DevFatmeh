import { useEffect, useState } from "react";
import { fetchPendingEvents } from "../api/data/fetchPendingEvents";
import { MappedEvent, PendingEvents } from "../types/types";

export const useFetchPendingEvents = (token: string) => {
  const [pendingEvents, setPendingEvents] = useState<MappedEvent[]>([]);
  const [pendingEventsTotal, setPendingEventsTotal] = useState<number>(0);

  useEffect(() => {
    const getPendingEvents = async () => {
      try {
        const data: PendingEvents = await fetchPendingEvents(token);
        setPendingEventsTotal(data.total);
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
  }, [token]);

  return { pendingEventsTotal, pendingEvents };
};
