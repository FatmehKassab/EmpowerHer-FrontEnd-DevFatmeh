import { useEffect, useState } from "react";

import { fetchRecentTransactions } from "../api/data/fetchRecentTransactions";
import { Transaction } from "../types/types";

export const useFetchRecentTransactions = () => {
    const [transactionsData, setTransactionsData] = useState<Transaction[]>([]);
    const [transactionsTotal, setTransactionsTotal] = useState<number>(0);
    const [transactionsComparison, setTransactionsComparison] =     useState<string>("");

  useEffect(() => {
    const getRecentTransactions = async () => {
        try {
          const data = await fetchRecentTransactions();
          setTransactionsData(data.transactions);
          setTransactionsTotal(data.total);
          setTransactionsComparison(data.comparison);
        } catch (error) {
          console.error("Error fetching transactions:", error);
        }
      };

    getRecentTransactions();
  }, []);

  return { transactionsData,
    transactionsTotal,
    transactionsComparison};
};
