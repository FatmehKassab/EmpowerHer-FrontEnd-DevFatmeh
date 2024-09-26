import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type MetricBoxProps = {
  icon: IconDefinition;
  bgIconColor: String;
  value: string | number;
  label: string;
  change: string;
  changeColor: string;
  changePercentage: string;
  bgColor: string;
};

const MetricBox: React.FC<MetricBoxProps> = ({
  icon,
  bgIconColor,
  value,
  label,
  change,
  changeColor,
  changePercentage,
  bgColor,
}) => {
  return (
    <div
      className={`w-[15%] min-w-[180px] h-auto min-h-[210px] flex flex-col gap-1 px-4 py-5 ${bgColor} rounded-lg shadow-lg`}
    >
      <div
        className={`w-10 h-10 flexCenter ${bgIconColor} rounded-full text-white`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <h1 className="text-white text-2xl font-bold">{value}</h1>
      </div>
      <div>
        <h1 className="text-white font-medium">{label}</h1>
      </div>
      <div className="text-sm">
        <h1 className="text-white">
          <span className={`${changeColor} font-medium`}>
            {changePercentage}
          </span>
          {change} than last month
        </h1>
      </div>
    </div>
  );
};

export default MetricBox;
