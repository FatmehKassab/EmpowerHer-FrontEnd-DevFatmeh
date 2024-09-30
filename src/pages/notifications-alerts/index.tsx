import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import { useFetchPendingEvents } from "../../hooks/useFetchPendingEvents";
import { useFetchPendingRegistrations } from "../../hooks/useFetchPendingRegistrations";

const Notification = () => {
  const { totalPendingReg, pendingUsersCurrentMonthDetails } =
    useFetchPendingRegistrations();
  const { pendingEvents } = useFetchPendingEvents();

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
          total={pendingEvents.length}
          showResponse={true}
          showDateTime={true}
          showRequestedBy={true}
        />
      </Table>
    </div>
  );
};

export default Notification;
