

const apiUrl = process.env.REACT_APP_API_URL;

export  const fetchUsers = async (token: string) => {
    const response = await fetch(`${apiUrl}/api/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
    });
  
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  
    const users = await response.json();
    return users;
  };
  

  

