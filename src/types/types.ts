// MembershipStatsResponse.ts
export interface MembershipStatsResponse {
    basic: string;
    corporate: string;
    individual: string;
    totalMemberships: number;
  }

// Types.ts
export interface ActiveUsersData {
  TotalOfActiveUsers: number;
  percentageChange: string;
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
