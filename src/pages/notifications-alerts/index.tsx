import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import { useFetchPendingEvents } from "../../hooks/useFetchPendingEvents";
import { useFetchPendingRegistrations } from "../../hooks/useFetchPendingRegistrations";

const Notification = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI3ODczNTgxLCJleHAiOjE3Mjc5NTk5ODF9.PK_vWAfgMex1m7fLAn4uTs-luWT1kQ_nj7KqFREEDZk";
  const { totalPendingReg, pendingUsersCurrentMonthDetails } =
    useFetchPendingRegistrations();

  const { pendingEvents, pendingEventsTotal } = useFetchPendingEvents(
    `${token}`
  );

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
          onClick: () => alert("Manage Roles button clicked!"),
        }}
        fullWidth
      >
        <TableRows
          rows={pendingUsersCurrentMonthDetails}
          total={totalPendingReg}
          showResponse={true}
          showEmail={true}
        />
      </Table>

      <Table title="Pending Event Approvals" fullWidth>
        <TableRows
          rows={pendingEvents}
          total={pendingEventsTotal}
          showResponse={true}
          showDateTime={true}
          showRequestedBy={true}
        />
      </Table>
    </div>
  );
};

export default Notification;
