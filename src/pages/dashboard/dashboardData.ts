
import { faAddressCard, faMoneyBillTrendUp, faUserPlus } from "@fortawesome/free-solid-svg-icons";
export interface MetricsData {
  totalActiveUsers: number;
  activeChangePercentage: string;
  totalRevenue: number;
  revenueChangePercentage: string;
  totalPendingReg: number;
  pendingRegChangePercentage: string;
}

export const getMetricsData = ({
  totalActiveUsers,
  activeChangePercentage,
  totalRevenue,
  revenueChangePercentage,
  totalPendingReg,
  pendingRegChangePercentage,
}: MetricsData) => {
  return [
    {
      icon: faUserPlus,
      bgIconColor: "bg-primary",
      value: totalActiveUsers ? `${totalActiveUsers.toLocaleString()}` : "0",
      label: "Active Users",
      changePercentage: activeChangePercentage || "0%",
      changeColor: "text-change",
      change: activeChangePercentage ? "more" : "less",
      bgColor: "bg-boxC1",
    },
    {
      icon: faMoneyBillTrendUp,
      bgIconColor: "bg-iconC2",
      value: totalRevenue ? `${totalRevenue.toLocaleString()}` : "$0",
      label: "Total Revenue",
      changePercentage: revenueChangePercentage || "0%",
      changeColor: "text-primary",
      change: revenueChangePercentage ? "" : "",
      bgColor: "bg-boxC2",
    },
    {
      icon: faAddressCard,
      bgIconColor: "bg-iconC3",
      value: totalPendingReg ? `${totalPendingReg.toLocaleString()}` : "0",
      label: "Pending Registrations",
      changePercentage: pendingRegChangePercentage || "0%",
      changeColor: "text-change",
      change: pendingRegChangePercentage ? "more" : "less",
      bgColor: "bg-boxC3",
    },
  ];
};

export const recentActivities = [
 

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
