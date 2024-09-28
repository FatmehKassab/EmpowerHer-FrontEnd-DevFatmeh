import React from "react";
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
import { getMetricsData, recentActivities } from "./dashboardData";
import { useFetchActiveUsers } from "../../hooks/useFetchActiveUsers";
import { useFetchTotalRevenue } from "../../hooks/useFetchTotalRevenue";
import { useFetchPendingRegistrations } from "../../hooks/useFetchPendingRegistrations";
import { useFetchRecentTransactions } from "../../hooks/useFetchRecentTransactions";
import { useFetchNewlyRegisteredUsers } from "../../hooks/useFetchNewlyRegisteredUsers";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const { totalActiveUsers, activeChangePercentage } = useFetchActiveUsers();
  const { totalRevenue, revenueChangePercentage } = useFetchTotalRevenue();
  const { totalPendingReg, pendingRegChangePercentage } =
    useFetchPendingRegistrations();
  const { change, total } = useFetchNewlyRegisteredUsers();
  const { transactionsTotal, transactionsComparison } =
    useFetchRecentTransactions();

  const metrics = getMetricsData({
    totalActiveUsers,
    activeChangePercentage,
    totalRevenue,
    revenueChangePercentage,
    totalPendingReg,
    pendingRegChangePercentage,
  });

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Metrics Section */}
      <Table title="Key Metrics" fullWidth>
        <div className="w-full flexBetween flex-wrap gap-10">
          {metrics.map((metric, index) => (
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
            change={change}
          />
          <RecentActivityItem
            title="Recent Transactions"
            count={transactionsTotal}
            change={transactionsComparison}
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
    </div>
  );
};

export default Dashboard;
