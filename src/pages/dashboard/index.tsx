import {
  faAddressCard,
  faMoneyBillTrendUp,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import MetricBox from "../../components/MetricBox";
import Table from "../../components/common/Table";

import Button from "../../components/common/Button";
import RecentActivityItem from "../../components/RecentActivityItem";
import DonutTickets from "../../components/DonutTickets";
import HBarChart from "../../components/GrowthHBar";
import VBarChart from "../../components/VBarChart";
import DonutMembership from "../../components/DonutMembership";
import DonutTichets from "../../components/DonutTickets";
import GrowthHBar from "../../components/GrowthHBar";
import InsightsVBar from "../../components/InsightsVBar";
import UserLineChart from "../../components/UserLineChart";

type MetricData = {
  icon: IconDefinition;
  bgIconColor: string;
  value: string | number;
  label: string;
  change: string;
  changeColor: string;
  changePercentage: string;
  bgColor: string;
};

const metricsData: MetricData[] = [
  {
    icon: faUserPlus,
    bgIconColor: "bg-primary",
    value: 200,
    label: "Active Users",
    changePercentage: "+15.3%",
    changeColor: "text-change",
    change: "more",
    bgColor: "bg-boxC1",
  },
  {
    icon: faMoneyBillTrendUp,
    bgIconColor: "bg-iconC2",
    value: "$1.2k",
    label: "Total Revenue",
    changePercentage: "-5.3%",
    changeColor: "text-primary",
    change: "less",
    bgColor: "bg-boxC2",
  },
  {
    icon: faAddressCard,
    bgIconColor: "bg-iconC3",
    value: 230,
    label: "Pending Registrations",
    changePercentage: "+25.1%",
    changeColor: "text-change",
    change: "more",
    bgColor: "bg-boxC3",
  },
];

const recentActivities = [
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

const approvalData = [
  { title: "pending user approvals", count: 200 },
  { title: "pending event approvals", count: 15 },
  { title: "platform issues", count: "7/2" },
];

const eventLabels = ["Event 1", "Event 2", "Event 3", "Event 4"];
const eventData = [36, 25, 45, 20];

const Dashboard: React.FC = () => {
  return (
    <div className="w-full flex flex-col  gap-8">
      <Table title="Key Metrics" fullWidth>
        <div className="w-full flexBetween flex-wrap gap-10 ">
          {metricsData.map((metric, index) => (
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

      <Table title="Reports and Analytics" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <GrowthHBar />
          <InsightsVBar />
          <UserLineChart />
        </div>
      </Table>

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
