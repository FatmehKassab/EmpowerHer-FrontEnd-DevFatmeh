import React from "react";
import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import TableList from "../../components/common/TableList";

const RecentActivity = () => {
  const signUpsData = [
    { name: "Omar B", date: "8/28/2024 1:22 PM" },
    { name: "Omar B", date: "8/28/2024 12:15 AM" },
    { name: "Omar B", date: "8/28/2024 1:22 PM" },
    { name: "Omar B", date: "8/28/2024 1:22 PM" },
    { name: "Omar B", date: "8/28/2024 1:22 PM" },
    { name: "Omar B", date: "8/28/2024 1:22 PM" },
  ];

  const transactionsData = [
    {
      name: "Omar B",
      amount: "$80.00",
      type: "User(P)",
      date: "8/28/2024 1:22 PM",
    },
    {
      name: "Omar B",
      amount: "$80.00",
      type: "User(P)",
      date: "8/28/2024 12:15 AM",
    },
    {
      name: "Omar B",
      amount: "$80.00",
      type: "User(P)",
      date: "8/28/2024 1:22 PM",
    },
    {
      name: "Omar B",
      amount: "$80.00",
      type: "User(P)",
      date: "8/28/2024 1:22 PM",
    },
    {
      name: "Omar B",
      amount: "$80.00",
      type: "User(P)",
      date: "8/28/2024 1:22 PM",
    },
    {
      name: "Omar B",
      amount: "$80.00",
      type: "User(P)",
      date: "8/28/2024 1:22 PM",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8">
      <Table
        title="new sign-ups"
        changePercentage="15.3% "
        change="more"
        buttonProps={{
          type: "button",
          title: "This month",
          variantColor: "btn-border",
          variantSize: "btn-table",
          textColor: "text-primary",
          onClick: () => alert(),
        }}
      >
        <TableRows rows={signUpsData} total={21} showDateRegistered={true} />
      </Table>

      <Table
        title="recent transactions"
        changePercentage="2.1%"
        change=" less"
        buttonProps={{
          type: "button",
          title: "This month",
          variantColor: "btn-border",
          variantSize: "btn-table",
          textColor: "text-primary",
          onClick: () => alert(),
        }}
      >
        <TableRows
          rows={transactionsData}
          total={120}
          showAmountAndType={true}
        />
      </Table>
      <Table
        title="recent event"
        changePercentage="1"
        change="less event"
        buttonProps={{
          type: "button",
          title: "This month",
          variantColor: "btn-border",
          variantSize: "btn-table",
          textColor: "text-primary",
          onClick: () => alert(),
        }}
      >
        <TableList />
      </Table>
    </div>
  );
};

export default RecentActivity;
