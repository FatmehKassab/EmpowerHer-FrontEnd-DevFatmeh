// src/components/Notification.tsx

import React from "react";
import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import { DRows, signUpRows } from "./notificationsData";

const Notification = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <Table
        title="Pending User Approvals"
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

      <Table title="Pending Event Approvals">
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
