// src/data/dashboardData.ts
import {
  faAddressCard,
  faMoneyBillTrendUp,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ActiveUsersData } from "../../types/types";

export const recentActivities = [
  {
    title: "New sign-ups",
    count: 21,
    changePercentage: "15.3% ",
    change: "more",
  },
  {
    title: "Recent transactions",
    count: 200,
    changePercentage: "2.17% ",
    change: "less",
  },
  {
    title: "Recent Event",
    count: 2,
    changePercentage: "1 ",
    change: "less Event",
  },
];

export const approvalData = [
  { title: "Pending user approvals", count: 200 },
  { title: "Pending event approvals", count: 15 },
  { title: "Platform issues", count: "7/2" },
];

export const metricsData = (activeUsersData: ActiveUsersData | null) => [
  {
    icon: faUserPlus,
    bgIconColor: "bg-primary",
    value: activeUsersData?.TotalOfActiveUsers ?? 0,
    label: "Active Users",
    changePercentage: activeUsersData?.percentageChange || "0%",
    changeColor:
      activeUsersData && activeUsersData.percentageChange.startsWith("+")
        ? "text-change"
        : "text-primary",
    change: activeUsersData?.percentageChange.startsWith("+")
      ? "more"
      : "less" || "",
    bgColor: "bg-boxC1",
  },
  {
    icon: faMoneyBillTrendUp,
    bgIconColor: "bg-iconC2",
    value: "$1.2k", // Static value (can be replaced by dynamic data)
    label: "Total Revenue",
    changePercentage: "-5.3%",
    changeColor: "text-primary",
    change: "less",
    bgColor: "bg-boxC2",
  },
  {
    icon: faAddressCard,
    bgIconColor: "bg-iconC3",
    value: 230, // Static value (can be replaced by dynamic data)
    label: "Pending Registrations",
    changePercentage: "+25.1%",
    changeColor: "text-change",
    change: "more",
    bgColor: "bg-boxC3",
  },
];
