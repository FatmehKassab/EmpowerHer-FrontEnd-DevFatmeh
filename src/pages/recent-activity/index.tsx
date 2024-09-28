import React, { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import TableList from "../../components/common/TableList";

// Define types for the data
interface User {
  name: string;
  date: string;
}

interface Transaction {
  name: string;
  amount: string; // Change to string
  type: string;
  dateTime: string;
}

interface ApiResponse {
  total: number;
  "percentage of comparison between current month and previous month": string;
  users: {
    name: string;
    "Date Registered": string;
  }[];
}

interface TransactionsApiResponse {
  total: number;
  comparison: string;
  transactions: Transaction[];
}

const RecentActivity: React.FC = () => {
  const [signUpsData, setSignUpsData] = useState<User[]>([]);
  const [changePercentage, setChangePercentage] = useState<string>("");
  const [change, setChange] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [transactionsData, setTransactionsData] = useState<Transaction[]>([]);
  const [transactionsTotal, setTransactionsTotal] = useState<number>(0);
  const [transactionsComparison, setTransactionsComparison] =
    useState<string>("");

  useEffect(() => {
    // Fetch sign-ups data from the API
    fetch("http://localhost:8080/api/newly-registered-users-total-comparison")
      .then((response) => response.json())
      .then((data: ApiResponse) => {
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
        setChange(""); // Update based on the API response
      })
      .catch((error) => {
        console.error("Error fetching sign-ups data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch recent transactions data from the API
    fetch("http://localhost:8080/api/recent-transactions")
      .then((response) => response.json())
      .then((data: TransactionsApiResponse) => {
        setTransactionsData(data.transactions);
        setTransactionsTotal(data.total);
        setTransactionsComparison(data.comparison);
      })
      .catch((error) => {
        console.error("Error fetching transactions data:", error);
      });
  }, []);

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
              rows={transactionsData.map((transaction) => {
                const formattedTransaction = {
                  ...transaction,
                  amount: `$${transaction.amount.toString()}`, // Prefix amount with a $ symbol
                  date: new Date(transaction.dateTime).toLocaleString(), // Format dateTime to a readable string
                };

                // Debug: Log formatted transaction to verify the values
                console.log("Formatted Transaction:", formattedTransaction);

                return formattedTransaction;
              })}
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
