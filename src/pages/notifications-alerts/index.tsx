import Table from "../../components/common/Table";
import TableRows from "../../components/common/TableRows";
import { useFetchPendingRegistrations } from "../../hooks/useFetchPendingRegistrations";

const Notification = () => {
  const { totalPendingReg, pendingUsersCurrentMonthDetails } =
    useFetchPendingRegistrations();

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
        {/* <TableRows
          rows={events} // Use the fetched events
          total={events.length} // Total events length
          showResponse={true}
          showDateTime={true}
          showRequestedBy={true}
        /> */}
        hi
      </Table>
    </div>
  );
};

export default Notification;
