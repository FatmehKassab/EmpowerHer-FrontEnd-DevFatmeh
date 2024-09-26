import React from "react";
import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import TableIssue from "../../components/common/TableIssue";

const Notification = () => {
  const signUpRows = [
    {
      name: "Omar B",
      email: "ExampleExample@example.com",
      response: "Yes",
    },
    {
      name: "Omar B",
      email: "ExampleExample@example.com",
      response: "No",
    },
    {
      name: "Omar B",
      email: "ExampleExample@example.com",
      response: "Yes",
    },
    {
      name: "Omar B",
      email: "ExampleExample@example.com",
      response: "Yes",
    },
    {
      name: "Omar B",
      email: "ExampleExample@example.com",
      response: "Yes",
    },
    {
      name: "Omar B",
      email: "ExampleExample@example.com",
      response: "Yes",
    },
  ];

  const DRows = [
    {
      name: "EmpowerHer Summit: Leading the charge",
      dateTime: "October 15, 2024 9:00 AM - 5:00 PM",
      requestedBy: "Admin Name",
      response: "Yes",
    },
    {
      name: "EmpowerHer Summit: Leading the charge",
      dateTime: "October 15 2024 9:00 AM - 5:00 PM",
      requestedBy: "Admin Name",
      response: "Yes",
    },
    {
      name: "EmpowerHer Summit: Leading the charge",
      dateTime: "October 15 2024 9:00 AM - 5:00 PM",
      requestedBy: "Admin Name",
      response: "Yes",
    },
    {
      name: "EmpowerHer Summit: Leading the charge",
      dateTime: "October 15 2024 9:00 AM - 5:00 PM",
      requestedBy: "Admin Name",
      response: "Yes",
    },
    {
      name: "EmpowerHer Summit: Leading the charge",
      dateTime: "October 15 2024 9:00 AM - 5:00 PM",
      requestedBy: "Admin Name",
      response: "Yes",
    },
    {
      name: "EmpowerHer Summit: Leading the charge",
      dateTime: "October 15 2024 9:00 AM - 5:00 PM",
      requestedBy: "Admin Name",
      response: "Yes",
    },
  ];
  const issues = [
    {
      title: "Database Connection Timeout",
      severity: "Critical",
      timestamp: "2024-08-26 14:32:15",
    },
    {
      title: "Database Connection Timeout",
      severity: "Critical",
      timestamp: "2024-08-26 14:32:15",
    },
  ];

  const downtimes = [
    {
      description: "service downtime on aug 26",
      impact:
        "35% of users reported issues accessing 10% of event registrations failed.",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8">
      <Table
        title="pending user approvals"
        buttonProps={{
          type: "button",
          title: "Roles",
          variantColor: "btn-border",
          variantSize: "btn-table",
          textColor: "text-primary",
          onClick: () => alert(),
        }}
        fullWidth
      >
        <TableRows
          rows={signUpRows}
          total={200}
          showResponse={true}
          showEmail={true}
        />
      </Table>
      {/* <Table title="platform issues">
        <TableIssue
          errorCount={7}
          issues={issues}
          downtimeCount={2}
          downtimes={downtimes}
        />
      </Table> */}
      <Table title="pending event approvals">
        <TableRows
          rows={DRows}
          total={15}
          showResponse={true}
          showDateTime={true}
          showRequestedBy={true}
        />
      </Table>
    </div>
  );
};

export default Notification;
