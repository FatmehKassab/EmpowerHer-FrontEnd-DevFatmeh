import React from "react";
import note from "../assets/images/note.png";

type RecentActivityProps = {
  title: string;
  count: number | string;
  change: string;
};

const RecentActivityItem: React.FC<RecentActivityProps> = ({
  title,
  count,
  change,
}) => {
  return (
    <div className="w-auto flexCenter gap-10">
      <div className="w-1/2 h-full flexCenter">
        <img
          src={note}
          alt="Note"
          width={90}
          height={50}
          className="object-cover"
        />
      </div>
      <div className="w-1/2 h-full flexBetween flex-col gap-4">
        <div>
          <h1 className="capitalize text-text font-medium text-nowrap">
            {title}
          </h1>
        </div>
        <div>
          <h1 className="text-4xl text-primary font-medium">{count}</h1>
        </div>
        <div>
          <h1 className="text-text">{change}</h1>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityItem;
