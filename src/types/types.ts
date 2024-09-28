
export interface MembershipStatsResponse {
    basic: string;
    corporate: string;
    individual: string;
    totalMemberships: number;
  }

export interface ActiveUsersData {
  TotalOfActiveUsers: number;
  percentageChange: string;
}


export interface TotalRevenueData {
  total_revenue: number;
  comparison: string;
}

export interface RecentActivity {
  title: string;
  count: number;
  changePercentage: string;
  change: string;
}

export interface ApprovalData {
  title: string;
  count: number | string; // Depending on your data structure
}

// src/types.ts
export interface ApiResponse {
  total: number;
  events: Event[];
}

// src/types/types.ts

export interface Event {
  name: string;
  date_time: string;  // Ensure this is the property name from the API
  requested_by: string;  // Ensure this is the property name from the API
}

export interface MappedEvent {
  name: string;
  dateTime: string;  // Change to match the expected format
  requestedBy: string;  // Change to match the expected format
  response: string;  // Additional property if needed
}

export interface MappedUser {
  name: string;
  email: string;
  response: string; 
}

//type for prnding registrations
export interface PendingUsers {
  TotalOfPendingUsers: number;
  pendingUsersCurrentMonth: number;
  pendingUsersLastMonth:number;
  percentageChange:string;
  pendingUsersCurrentMonthDetails: MappedUser[];
}


export interface User  {
  name: string;
  date: string;
}


export interface Transaction  {
  name: string;
  amount: string; // Change to string
  type: string;
  dateTime: string;
}


export interface NewSignUps  {
  total: number;
  "percentage of comparison between current month and previous month": string;
  users: {
    name: string;
    "Date Registered": string;
  }[];
  
}


export interface Transactions  {
  total: number;
  comparison: string;
  transactions: Transaction[];
}