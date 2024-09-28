import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";

type MenuItemProps = {
  icon: IconDefinition;
  title: string;
  path?: string;
  isExpanded?: boolean;
  onClick?: () => void;
  showChevron?: boolean;
  subMenu?: { title: string; path: string }[];
  isActive?: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  path,
  isExpanded,
  onClick,
  showChevron = true,
  subMenu = [],
  isActive = false,
}) => {
  return (
    <div>
      <div className="py-1 px-3">
        <NavLink
          to={path || ""}
          className={({ isActive }) =>
            `selected-link-bg-size ${isActive ? "selected-link-bg-color" : ""}`
          }
          onClick={onClick}
        >
          <div className="flexCenter gap-3">
            <FontAwesomeIcon icon={icon} />
            <span>{title}</span>
          </div>
          {showChevron && subMenu.length > 0 && (
            <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
          )}
        </NavLink>
      </div>
      {isExpanded && subMenu.length > 0 && (
        <div className="w-full flex pt-2">
          <div className="border-l w-[10%] ml-[30px]"></div>
          <div className="w-[90%] flex flex-col gap-2">
            {subMenu.map((subItem) => (
              <NavLink
                key={subItem.title}
                to={subItem.path}
                className={({ isActive }) =>
                  `selected-link-bg-size ${
                    isActive ? "selected-link-bg-color" : ""
                  }`
                }
              >
                <p>{subItem.title}</p>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
