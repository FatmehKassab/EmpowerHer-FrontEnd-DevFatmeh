// src/components/RecentActivity.tsx

import React from "react";
import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import TableList from "../../components/common/TableList";
import { signUpsData, transactionsData } from "./recentActivityData";

const RecentActivity = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <Table
        title="New Sign-Ups"
        changePercentage="15.3% "
        change="more"
        buttonProps={{
          type: "button",
          title: "This Month",
          variantColor: "btn-border",
          variantSize: "btn-table",
          textColor: "text-primary",
          onClick: () => alert(),
        }}
      >
        <TableRows rows={signUpsData} total={21} showDateRegistered={true} />
      </Table>

      <Table
        title="Recent Transactions"
        changePercentage="2.1%"
        change="less"
        buttonProps={{
          type: "button",
          title: "This Month",
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
        title="Recent Events"
        changePercentage="1"
        change="less event"
        buttonProps={{
          type: "button",
          title: "This Month",
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
