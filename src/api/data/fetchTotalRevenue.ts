export const fetchTotalRevenue = async (apiUrl: string) => {
    const response = await fetch(`${apiUrl}/api/total-revenue`);
    if (!response.ok) {
      throw new Error("Error fetching total revenue");
    }
    return await response.json();
  };
  