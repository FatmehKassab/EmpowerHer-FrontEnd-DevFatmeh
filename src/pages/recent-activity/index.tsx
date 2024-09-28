import React, { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import TableList from "../../components/common/TableList";
import { transactionsData } from "./recentActivityData";

// Define types for API response and the data
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
}

const RecentActivity: React.FC = () => {
  const [signUpsData, setSignUpsData] = useState<User[]>([]);
  const [changePercentage, setChangePercentage] = useState<string>("");
  const [change, setChange] = useState<string>("");
  const [total, setTotal] = useState<number>(0);

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
        setChangePercentage(
          data[
            "percentage of comparison between current month and previous month"
          ]
        );
        setChange(""); // Based on the API response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-8">
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
      >
        <TableRows rows={signUpsData} total={total} showDateRegistered={true} />
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
