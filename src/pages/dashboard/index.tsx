import React from "react";
import useFetch from "../../hooks/useFetch"; // Adjust the import path

import MetricBox from "../../components/MetricBox";
import Table from "../../components/common/Table";
import Button from "../../components/common/Button";
import RecentActivityItem from "../../components/RecentActivityItem";
import GrowthHBar from "../../components/GrowthHBar";
import InsightsVBar from "../../components/InsightsVBar";
import UserLineChart from "../../components/UserLineChart";
import DonutMembership from "../../components/DonutMembership";
import DonutTichets from "../../components/DonutTickets";

import { ActiveUsersData } from "../../types/types";
import { approvalData, metricsData, recentActivities } from "./dashboardData";

const Dashboard: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const {
    data: activeUsersData,
    loading,
    error,
  } = useFetch(`${apiUrl}/api/active-users/monthly-comparison`) as {
    data: ActiveUsersData | null;
    loading: boolean;
    error: string | null;
  };

  if (loading) return <div>Loading data, please wait...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

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
          <DonutTichets />
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
          {approvalData.map((item, index) => (
            <div key={index} className="flexBetween gap-10">
              <h1 className="capitalize text-text font-medium text-nowrap">
                {item.title}
              </h1>
              <span className="text-primary font-medium">{item.count}</span>
            </div>
          ))}
        </div>
      </Table>
    </div>
  );
};

export default Dashboard;
