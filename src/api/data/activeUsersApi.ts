// src/api/activeUsersApi.ts
export const fetchActiveUsers = async (apiUrl: string) => {
    const response = await fetch(`${apiUrl}/api/active-users/monthly-comparison`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch active users`);
    }
    return await response.json();
  };
  