// src/pages/notifications-alerts/index.tsx
import React, { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import { ApiResponse, MappedEvent, MappedUser } from "../../types/types"; // Import the user type

const Notification = () => {
  const [events, setEvents] = useState<MappedEvent[]>([]);
  const [users, setUsers] = useState<MappedUser[]>([]); // State for users
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [totalPendingReg, setTotalPendingReg] = useState<number>(0);
  const [pendingRegChangePercentage, setPendingRegChangePercentage] =
    useState<string>("");

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:8080/api/pending-events"
        );
        const data: ApiResponse = await response.json();

        // Map the events from the API response to the desired structure
        setEvents(
          data.events.map((event) => ({
            name: event.name,
            dateTime: event.date_time, // Date-time from the API
            requestedBy: event.requested_by, // User who requested
            response: "Pending", // Set a default response
          }))
        );
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:8080/api/pending-users/monthly-comparison"
        );
        const data = await response.json();

        setTotalPendingReg(data.pendingUsersCurrentMonth); // Assuming the response has a 'total' field
        setPendingRegChangePercentage(data.percentageChange); // Adjust as per your API response
        setUsers(
          data.pendingUsersCurrentMonthDetails.map((user: MappedUser) => ({
            name: user.name,
            email: user.email, // Email from the API
          }))
        );
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-wrap gap-8">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <Table
        title="Pending User Approvals"
        buttonProps={{
          type: "button",
          title: "Roles",
          variantColor: "btn-border",
          variantSize: "btn-table",
          textColor: "text-primary",
          onClick: () => alert("Manage Roles button clicked!"),
        }}
        fullWidth
      >
        <TableRows
          rows={users} // Use the fetched users
          total={totalPendingReg} // Total users length
          showResponse={true}
          showEmail={true} // Show email column for users
        />
      </Table>

      <Table title="Pending Event Approvals" fullWidth>
        <TableRows
          rows={events} // Use the fetched events
          total={events.length} // Total events length
          showResponse={true}
          showDateTime={true}
          showRequestedBy={true}
        />
      </Table>
    </div>
  );
};

export default Notification;
