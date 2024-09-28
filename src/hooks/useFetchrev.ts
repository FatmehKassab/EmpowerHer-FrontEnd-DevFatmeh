// src/hooks/useFetch.ts
import { useState, useEffect } from "react";

const useFetchrev = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [revenueChangePercentage, setRevenueChangePercentage] = useState("0%");

  useEffect(() => {
    const fetchTotalRevenue = async () => {
      setLoading(true); // Set loading to true at the start
      try {
        const response = await fetch(`${url}/api/total-revenue`);
        if (!response.ok) throw new Error("Network response was not ok");
        const fetchedData = await response.json();

        // Parse total revenue and handle the comparison percentage
        const totalRevenueString = fetchedData.total_revenue; // e.g., "$0.00"
        const totalRevenueValue = parseFloat(totalRevenueString.replace(/[^0-9.-]+/g, "")); // Extract numeric value
        
        // Update state with fetched data
        setTotalRevenue(totalRevenueValue); // Set the parsed numeric total revenue
        setRevenueChangePercentage(fetchedData.comparison); // Use the comparison percentage directly
        setData(fetchedData); // Store the fetched data if needed
      } catch (err) {
        console.error("Error fetching total revenue:", err);
        if (err instanceof Error) {
          setError(err.message); // Set the error message if it's an instance of Error
        } else {
          setError("An unknown error occurred"); // Fallback error message
        }
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
  
    fetchTotalRevenue();
  }, [url]);

  return { data, loading, error, totalRevenue, revenueChangePercentage }; // Return additional states
};

export default useFetchrev;
