import React from "react";

// Define the types for Issue and Downtime
interface Issue {
  title: string;
  severity: string;
  timestamp: string;
}

interface Downtime {
  description: string;
  impact: string;
}

// Define the props type for TableIssue component
interface TableIssueProps {
  errorCount: number;
  issues: Issue[];
  downtimeCount: number;
  downtimes: Downtime[];
}

const TableIssue: React.FC<TableIssueProps> = ({
  errorCount,
  issues,
  downtimeCount,
  downtimes,
}) => {
  return (
    <div>
      <div className="flexCenter">
        <h1 className="text-text text-center font-medium capitalize border-b border-black w-fit pb-1">
          error logs: <span className="text-primary">{errorCount}</span>
        </h1>
      </div>
      <div className="border-black pb-1 divide-y-2 overflow-wrap break-word max-w-xs">
        {issues.map((issue, index) => (
          <div
            key={index}
            className={`flex flex-col capitalize font-medium ${
              index > 0 ? "pt-2" : "pb-2"
            }`}
          >
            <span className="text-text">
              Issue {index + 1}:{" "}
              <span className="text-primary">{issue.title}</span>
            </span>
            <span className="text-text">
              Severity: <span className="text-primary">{issue.severity}</span>
            </span>
            <span className="text-text">
              Timestamp: <span className="text-primary">{issue.timestamp}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="flexCenter">
        <h1 className="text-text text-center font-medium capitalize border-b border-black w-fit py-1">
          downtime: <span className="text-primary">{downtimeCount}</span>
        </h1>
      </div>
      <div className="flex flex-col font-medium overflow-wrap break-words max-w-xs">
        {downtimes.map((downtime, index) => (
          <span key={index} className="text-text capitalize pb-2">
            Downtime {index + 1}:{" "}
            <span className="text-primary">{downtime.description}</span>
            <p className="text-text overflow-wrap break-words max-w-xs ">
              Impact: <span className="text-primary">{downtime.impact}</span>
            </p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TableIssue;
