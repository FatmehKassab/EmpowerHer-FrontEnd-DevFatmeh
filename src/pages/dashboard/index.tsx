import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch"; // Adjust the import path

import MetricBox from "../../components/MetricBox";
import Table from "../../components/common/Table";
import Button from "../../components/common/Button";
import RecentActivityItem from "../../components/RecentActivityItem";
import GrowthHBar from "../../components/GrowthHBar";
import InsightsVBar from "../../components/InsightsVBar";
import UserLineChart from "../../components/UserLineChart";
import DonutMembership from "../../components/DonutMembership";
import DonutTickets from "../../components/DonutTickets"; // Fix typo in import

import {
  ActiveUsersData,
  ApiResponse,
  MappedEvent,
  MappedUser,
} from "../../types/types";
import { metricsData, recentActivities } from "./dashboardData";

const Dashboard: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const {
    data: activeUsersData,
    loading: loadingActiveUsers,
    error: errorActiveUsers,
  } = useFetch(`${apiUrl}/api/active-users/monthly-comparison`) as {
    data: ActiveUsersData | null;
    loading: boolean;
    error: string | null;
  };

  const [events, setEvents] = useState<MappedEvent[]>([]);
  const [users, setUsers] = useState<MappedUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

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
            dateTime: event.date_time,
            requestedBy: event.requested_by,
            response: "Pending",
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

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:8080/api/pending-users/monthly-comparison"
        );
        const data: ApiResponse = await response.json();

        // Define the type for user
        setUsers(
          data.pendingUsersCurrentMonthDetails.map((user: MappedUser) => ({
            name: user.name,
            email: user.email,
            response: "Pending",
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
    fetchUsers();
  }, []);

  const pendingUsersCount = users.length;
  const pendingEventsCount = events.length;

  if (loading || loadingActiveUsers)
    return <div>Loading data, please wait...</div>;
  if (error || errorActiveUsers)
    return (
      <div className="text-red-500">Error: {error || errorActiveUsers}</div>
    );

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Metrics Section */}
      <Table title="Key Metrics" fullWidth>
        <div className="w-full flexBetween flex-wrap gap-10">
          {metricsData(activeUsersData).map((metric, index) => (
            <MetricBox
              key={index}
              icon={metric.icon}
              bgIconColor={metric.bgIconColor}
              value={metric.value}
              label={metric.label}
              change={metric.change}
              changeColor={metric.changeColor}
              changePercentage={metric.changePercentage}
              bgColor={metric.bgColor}
            />
          ))}
          <DonutMembership />
          <DonutTickets />
        </div>
      </Table>
      <Table
        title="Recent activity"
        buttonProps={{
          type: "button",
          title: "This month",
          variantColor: "btn-border",
          variantSize: "btn-table",
          textColor: "text-primary",
          onClick: () => alert(),
        }}
        fullWidth
      >
        <div className="w-full flexBetween flex-wrap gap-10 pb-4">
          {recentActivities.map((activity, index) => (
            <RecentActivityItem
              key={index}
              title={activity.title}
              count={activity.count}
              change={activity.change}
            />
          ))}
        </div>

        <div className="flexCenter pt-4 border-t border-slate-300">
          <Button
            type="button"
            title="View full reports"
            variantColor="btn-primary"
            variantSize="btn-table"
            textColor="text-white"
            onClick={() => alert("Button clicked!")}
          />
        </div>
      </Table>

      {/* Reports and Analytics Section */}
      <Table title="Reports and Analytics" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <GrowthHBar />
          <InsightsVBar />
          <UserLineChart />
        </div>
      </Table>

      {/* Notifications Section */}
      <Table title="Notifications and Alerts">
        <div className="flex flex-col gap-4">
          <div className="flexBetween gap-10">
            <h1 className="capitalize text-text font-medium text-nowrap">
              Pending user approvals
            </h1>
            <span className="text-primary font-medium">
              {pendingUsersCount}
            </span>
          </div>
          <div className="flexBetween gap-10">
            <h1 className="capitalize text-text font-medium text-nowrap">
              Pending event approvals
            </h1>
            <span className="text-primary font-medium">
              {pendingEventsCount}
            </span>
          </div>
        </div>
      </Table>
    </div>
  );
};

export default Dashboard;
