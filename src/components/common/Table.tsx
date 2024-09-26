import React from "react";
import Button, { ButtonProps } from "./Button";

type TableProps = {
  title: string;
  // icon?: IconDefinition;
  changePercentage?: string;
  change?: string;
  children: React.ReactNode;
  buttonProps?: ButtonProps;
  fullWidth?: boolean;
};

const Table: React.FC<TableProps> = ({
  title,
  // icon,
  changePercentage,
  change,
  children,
  buttonProps,
  fullWidth = false,
}) => {
  return (
    <div
      className={`${
        fullWidth ? "w-full" : "w-fit"
      } h-auto bg-white shadow-lg rounded-xl divide-y divide-slate-300`}
    >
      <div className="w-auto flexBetween gap-5 p-4 rounded-t-xl">
        <h1 className="text-primary text-xl font-medium capitalize">{title}</h1>
        <div className="flexCenter gap-2 text-primary">
          {/* <FontAwesomeIcon icon={icon} /> */}
          <span className="text-primary font-medium">
            {changePercentage}{" "}
            <span className="text-text  font-medium ">{change}</span>
          </span>
        </div>

        {buttonProps && <Button {...buttonProps} />}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default Table;
