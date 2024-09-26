import { ReactElement } from "react";

export type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: ReactElement;
  variantColor: string;
  variantSize: string;
  textColor: string;
  onClick?: () => void;
  onSubmit?: () => void;
};

const Button = ({
  type,
  title,
  icon,
  variantColor,
  variantSize,
  textColor,
  onClick,
  onSubmit,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter ${variantSize} ${variantColor}`}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      <div className="flexCenter flex-row gap-2 whitespace-nowrap">
        {icon && <span className="text-2xl text-primary">{icon}</span>}
        <span className={`text-sm font-semibold ${textColor} capitalize`}>
          {title}
        </span>
      </div>
    </button>
  );
};

export default Button;
