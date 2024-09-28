import { useState } from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import logo from "../../../assets/images/logoEhe.png";
import MenuItem from "./MenuItem";
import menuItemsData from "./menuItemsData";

const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const currentLocation = useLocation();

  const handleExpand = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div className="w-full h-full bg-primary text-white">
      <div className="w-full h-[10%] max-h-[70px] flexStart p-5">
        <img
          src={logo}
          alt="Logo"
          width={200}
          height={50}
          className="min-w-[150px] object-cover"
        />
      </div>
      <div className="w-full h-[90%] p-2">
        {menuItemsData.map((menuItem, index) => (
          <MenuItem
            key={index}
            icon={menuItem.icon}
            title={menuItem.title}
            path={menuItem.path}
            isExpanded={expandedMenu === menuItem.title}
            onClick={() => handleExpand(menuItem.title)}
            subMenu={menuItem.subMenu}
            isActive={currentLocation.pathname === menuItem.path}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
