type EventData = {
  title: string;
  date: string;
  location: string;
  status: string;
  registrations: number;
  ticketsSold: number;
  revenue: string;
};

const TableList = () => {
  const events: EventData[] = [
    {
      title: "EmpowerHer Summit: Leading the charge",
      date: "October 15, 2024, 9:00 AM - 5:00 PM",
      location: "Online Event (via Zoom)",
      status: "Upcoming",
      registrations: 500,
      ticketsSold: 400,
      revenue: "$70,000",
    },
    {
      title: "EmpowerHer Summit: Leading the charge",
      date: "October 15, 2024, 9:00 AM - 5:00 PM",
      location: "Online Event (via Zoom)",
      status: "Upcoming",
      registrations: 500,
      ticketsSold: 400,
      revenue: "$70,000",
    },
    {
      title: "EmpowerHer Networking: Connect & Grow",
      date: "December 5, 2024, 6:00 PM - 9:00 PM",
      location: "Online Event (via Zoom)",
      status: "Upcoming",
      registrations: 200,
      ticketsSold: 150,
      revenue: "$30,000",
    },
  ];

  // Define the keys in eventDetails as keys of EventData
  const eventDetails: { label: string; key: keyof EventData }[] = [
    { label: "Date & Time", key: "date" },
    { label: "Location", key: "location" },
    { label: "Event Status", key: "status" },
    { label: "Number of Registrations", key: "registrations" },
    { label: "Total Tickets Sold", key: "ticketsSold" },
    { label: "Revenue Generated", key: "revenue" },
  ];

  return (
    <div className="flexCenter w-full flex-col">
      <h1 className="text-primary font-medium pb-4">Total: {events.length}</h1>
      <div className="flex flex-wrap gap-y-10 w-full">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex w-1/2 flex-col ${
              index % 2 !== 0 ? " border-l-2 border-slate-300 pl-10" : ""
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
