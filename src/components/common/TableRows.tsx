import React from "react";
import Button from "./Button";

type Row = {
  name: string;
  dateRegistered?: string;
  date?: string;
  amount?: string;
  type?: string;
  email?: string;
  response?: string;
  requestedBy?: string;
  dateTime?: string;
};

type TableRowsProps = {
  rows: Row[];
  total: number;
  showDateRegistered?: boolean;
  showDateTime?: boolean;
  showAmountAndType?: boolean;
  showEmail?: boolean;
  showEmailResponse?: boolean;
  showResponse?: boolean;
  showRequestedBy?: boolean;
};

const TableRows: React.FC<TableRowsProps> = ({
  rows,
  total,
  showDateRegistered = false,
  showAmountAndType = false,
  showEmail = false,
  showEmailResponse = false,
  showRequestedBy = false,
  showDateTime = false,
  showResponse = false,
}) => {
  return (
    <div className="flexCenter flex-col ">
      <h1 className="text-primary font-medium">Total: {total}</h1>
      <div className="w-full  h-auto font-medium flex-col">
        {/* Table Header */}
        <div
          className={`${
            showAmountAndType || showDateTime
              ? "grid grid-cols-4"
              : showEmail || showResponse
              ? "grid grid-cols-3"
              : "flex justify-between"
          } border-b border-black text-text py-1`}
        >
          <span>Name</span>
          {showDateRegistered && <span>Date Registered</span>}
          {showDateTime && <span className="text-center ">Date & Time</span>}
          {showAmountAndType && <span>Amount</span>}
          {showAmountAndType && <span>Type</span>}
          {showEmail && <span className="text-center">Email</span>}
          {showRequestedBy && (
            <span className="text-center ">Requested By</span>
          )}
          {showResponse && <span className="text-center">Response</span>}

          {showAmountAndType && <span className="text-center">Date</span>}
        </div>

        {/* Table Rows */}
        {rows.map((row, index) => (
          <div
            key={index}
            className={`${
              showAmountAndType || showDateTime
                ? "grid grid-cols-4 "
                : showEmail || showResponse
                ? "grid grid-cols-3 "
                : "flex justify-between "
            } border-b border-text text-primary py-1`}
          >
            <span className="text-nowrap">{row.name}</span>
            {showDateRegistered && <span>{row.date}</span>}
            {showDateTime && (
              <span className="text-center text-nowrap">{row.dateTime}</span>
            )}
            {showAmountAndType && <span>{row.amount}</span>}
            {showAmountAndType && <span>{row.type}</span>}
            {showEmail && <span className="text-center">{row.email}</span>}
            {showRequestedBy && (
              <span className="text-center ">{row.requestedBy}</span>
            )}

            {showResponse && (
              <div className="flexCenter gap-2 ">
                <div>
                  <Button
                    type="button"
                    title="Approve"
                    variantColor="btn-primary "
                    variantSize="btn-table"
                    textColor="text-white "
                    onClick={() => alert("Button clicked!")}
                  />
                </div>
                <div>
                  <Button
                    type="button"
                    title="Deny"
                    variantColor="btn-border"
                    variantSize="btn-table"
                    textColor="text-primary"
                    onClick={() => alert("Button clicked!")}
                  />
                </div>
              </div>
            )}

            {showAmountAndType && <span>{row.date}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableRows;
