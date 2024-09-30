import { useEffect, useState } from "react";

import {
  MappedRecentEvent,
  RecentEventApi,
  RecentEvents,
} from "../types/types";
import { fetchRecentEvents } from "../api/data/fetchRecentEvents";

export const useFetchRecentEvents = (token: string) => {
  const [recentEvents, setRecentEvents] = useState<RecentEventApi[]>([]);
  const [recentEventsTotal, setRecentEventsTotal] = useState<number>(0);
  const [recentEventsComparison, setEventsComparison] = useState<string>("");

  useEffect(() => {
    const getRecentEvents = async () => {
      try {
        const data: RecentEvents = await fetchRecentEvents(token);
        setRecentEventsTotal(data.total);
        setEventsComparison(data.comparison);

        setRecentEvents(
          data.events.map((event) => ({
            title: event.title,
            dateAndTime: new Date(event.date_and_time).toLocaleString(),

            location: event.location,
            numberOfRegistrations: event.number_of_registrations,
            totalTicketsSold: event.total_tickets_sold,
            revenueGenerated: event.revenue_generated,
            deatils: event.deatils,
          }))
        );
      } catch (error) {
        console.error("Error fetching Recent events:", error);
      }
    };

    getRecentEvents();
  }, [token]);

  return { recentEventsTotal, recentEvents, recentEventsComparison };
};
