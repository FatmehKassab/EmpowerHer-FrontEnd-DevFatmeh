
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
  count: number | string; 
}


export interface PendingEvents {
  total: number;
  events: Event[];
}



export interface Event {
  name: string;
  date_time: string;  
  requested_by: string; 
}

export interface MappedEvent {
  name: string;
  dateTime: string;  
  requestedBy: string; 
 
}

export interface MappedUser {
  name: string;
  email: string;
}


export interface PendingUsers {
  TotalOfPendingUsers: number;
  pendingUsersCurrentMonth: number;
  pendingUsersLastMonth:number;
  percentageChange:string;
  pendingUsersCurrentMonthDetails: MappedUser[]
}


export interface User  {
  name: string;
  date: string;
}


export interface Transaction  {
  name: string;
  amount: string;
  type: string;
  dateTime: string;
}

export interface Transactions  {
  total: number;
  comparison: string;
  transactions:
  {
    name: string;
  amount: string;
  type: string;
  dateTime: string;

  } 
}


export interface NewSignUps  {
  total: number;
  "percentage of comparison between current month and previous month": string;
  users: {
    name: string;
    "Date Registered": string;
  }[];
  
}


export interface TicketStatus {
  total_tickets: number;
  total_tickets_sold: number;
  total_tickets_remaining: number;
  percentage_sold: string;
  percentage_remaining: string;
}
