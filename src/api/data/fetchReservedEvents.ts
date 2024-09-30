
const apiUrl = process.env.REACT_APP_API_URL;

export  const fetchReservedEvents = async (): Promise<any[]> => {
    const response = await fetch(`${apiUrl}/api/reserved_events`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  };
  

  