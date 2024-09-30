import { useFetchRecentEvents } from "../../hooks/useFetchRecentEvents";
import { RecentEventApi } from "../../types/types";

const TableList = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI3Njk5MTc1LCJleHAiOjE3Mjc3ODU1NzV9.LFMnctCtSQq61zpdr3r1_PwhzdU5J7elVD7M41rWpfI";

  const { recentEventsTotal, recentEvents } = useFetchRecentEvents(`${token}`);

  const eventDetails: { label: string; key: keyof RecentEventApi }[] = [
    { label: "Date & Time", key: "dateAndTime" },
    { label: "Location", key: "location" },
    { label: "Number of Registrations", key: "numberOfRegistrations" },
    { label: "Total Tickets Sold", key: "totalTicketsSold" },
    { label: "Revenue Generated", key: "revenueGenerated" },
  ];

  return (
    <div className="flexCenter w-full flex-col">
      <h1 className="text-primary font-medium pb-4">
        Total: {recentEventsTotal}
      </h1>
      <div className="flex flex-wrap gap-y-10 w-full">
        {recentEvents.map((event, index) => (
          <div
            key={index}
            className={`flex w-1/2 flex-col ${
              index % 2 !== 0 ? "border-l-2 border-slate-300 pl-10" : ""
            }`}
          >
            <h1 className="text-primary font-medium text-lg">{event.title}</h1>
            <ul className="pt-2">
              {eventDetails.map((detail, idx) => (
                <li key={idx} className="text-text font-medium">
                  <span className="text-primary font-medium">
                    {detail.label}:{" "}
                  </span>

                  {event[detail.key]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableList;
