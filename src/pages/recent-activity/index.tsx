import React, { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import TableList from "../../components/common/TableList";
import { useFetchNewlyRegisteredUsers } from "../../hooks/useFetchNewlyRegisteredUsers";
import { useFetchRecentTransactions } from "../../hooks/useFetchRecentTransactions";

const RecentActivity: React.FC = () => {
  const { change, total, signUpsData, changePercentage } =
    useFetchNewlyRegisteredUsers();
  const { transactionsTotal, transactionsComparison, transactionsData } =
    useFetchRecentTransactions();

  return (
    <div className="flex flex-wrap gap-8">
      <div className="w-full flex   gap-8">
        <div className="w-[40%]">
          {" "}
          <Table
            title="New Sign-Ups"
            changePercentage={changePercentage}
            change={change}
            buttonProps={{
              type: "button",
              title: "This Month",
              variantColor: "btn-border",
              variantSize: "btn-table",
              textColor: "text-primary",
              onClick: () => alert(),
            }}
            fullWidth
          >
            <TableRows
              rows={signUpsData}
              total={total}
              showDateRegistered={true}
            />
          </Table>
        </div>
        <div className="w-[60%]">
          <Table
            title="Recent Transactions"
            changePercentage={transactionsComparison}
            change=""
            buttonProps={{
              type: "button",
              title: "This Month",
              variantColor: "btn-border",
              variantSize: "btn-table",
              textColor: "text-primary",
              onClick: () => alert(),
            }}
            fullWidth
          >
            <TableRows
              rows={transactionsData}
              total={transactionsTotal}
              showAmountAndType={true}
            />
          </Table>
        </div>
      </div>

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
        fullWidth
      >
        <TableList />
      </Table>
    </div>
  );
};

export default RecentActivity;
