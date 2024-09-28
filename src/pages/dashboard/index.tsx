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
import DonutTickets from "../../components/DonutTickets";
import { useNavigate } from "react-router-dom";

import { ActiveUsersData, MappedEvent, MappedUser } from "../../types/types";
import { recentActivities } from "./dashboardData";
import {
  faAddressCard,
  faMoneyBillTrendUp,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

interface User {
  name: string;
  date: string;
}

interface ApiResponse {
  total: number;
  "percentage of comparison between current month and previous month": string;
  users: {
    name: string;
    "Date Registered": string;
  }[];
  pendingUsersCurrentMonthDetails: MappedUser[];
}

const Dashboard: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
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

  const [signUpsData, setSignUpsData] = useState<User[]>([]);
  const [changePercentage, setChangePercentage] = useState<string>("");
  const [change, setChange] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [revenueChangePercentage, setRevenueChangePercentage] =
    useState<string>("");
  const [totalPendingReg, setTotalPendingReg] = useState<number>(0);
  const [pendingRegChangePercentage, setPendingRegChangePercentage] =
    useState<string>("");
  // Fetch total revenue
  useEffect(() => {
    const fetchTotalRevenue = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/total-revenue`);
        const data = await response.json();
        setTotalRevenue(data.total_revenue); // Assuming the response has a 'total' field
        setRevenueChangePercentage(data.comparison); // Adjust as per your API response
      } catch (error) {
        console.error("Error fetching total revenue:", error);
      }
    };

    fetchTotalRevenue();
  }, [apiUrl]);

  useEffect(() => {
    const fetchPendingRegistrations = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/pending-users/monthly-comparison`
        );
        const data = await response.json();
        setTotalPendingReg(data.TotalOfPendingUsers); // Assuming the response has a 'total' field
        setPendingRegChangePercentage(data.percentageChange); // Adjust as per your API response
      } catch (error) {
        console.error("Error fetching total revenue:", error);
      }
    };

    fetchPendingRegistrations();
  }, [apiUrl]);

  // Fetch newly registered users

  useEffect(() => {
    // Fetch data from the API route
    fetch("http://localhost:8080/api/newly-registered-users-total-comparison")
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        // Update the table data with the fetched data
        setSignUpsData(
          data.users.map((user) => ({
            name: user.name,
            date: user["Date Registered"],
          }))
        );
        setTotal(data.total);
        setChange(
          data[
            "percentage of comparison between current month and previous month"
          ]
        );
        // setChange("more"); // Based on the API response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // Fetch pending users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}/api/pending-users/monthly-comparison`
        );
        const data: ApiResponse = await response.json();

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

    fetchUsers();
  }, [apiUrl]);

  const metricsData = (activeUsersData: ActiveUsersData | null) => {
    // Ensure activeUsersData is not null or undefined
    if (!activeUsersData) {
      return [];
    }

    const changeColor = "text-primary";

    return [
      {
        icon: faUserPlus,
        bgIconColor: "bg-primary",
        value: activeUsersData.TotalOfActiveUsers ?? 0,
        label: "Active Users",
        changePercentage: activeUsersData.percentageChange || "0%",
        changeColor: "text-change",
        change: activeUsersData.percentageChange ? "more" : "less",
        bgColor: "bg-boxC1",
      },
      {
        icon: faMoneyBillTrendUp,
        bgIconColor: "bg-iconC2",
        value: totalRevenue ? `${totalRevenue.toLocaleString()}` : "$0", // Use dynamic data
        label: "Total Revenue",
        changePercentage: revenueChangePercentage || "0%", // Use fetched revenue change percentage
        changeColor: changeColor,
        change: revenueChangePercentage ? "" : "",
        bgColor: "bg-boxC2",
      },
      {
        icon: faAddressCard,
        bgIconColor: "bg-iconC3",
        value: totalPendingReg ? `${totalPendingReg.toLocaleString()}` : "0", // Use dynamic data
        label: "Pending Registrations",
        changePercentage: pendingRegChangePercentage || "0%", // Use fetched revenue change percentage
        changeColor: "text-change",
        change: pendingRegChangePercentage ? "more" : "less",
        bgColor: "bg-boxC3",
      },
    ];
  };

  const pendingUsersCount = users.length;

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
        title="Recent Activity"
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
          <RecentActivityItem
            title="New Sign-Ups"
            count={total}
            change={change} // Use change directly
          />

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
            onClick={() => navigate("/recent-activity")}
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
      {/* Uncomment if needed */}
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
          {/* <div className="flexBetween gap-10">
            <h1 className="capitalize text-text font-medium text-nowrap">
              Pending event approvals
            </h1>
            <span className="text-primary font-medium">{pendingUsersCount}</span>
          </div> */}
        </div>
      </Table>
    </div>
  );
};

export default Dashboard;
