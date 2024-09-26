import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logoEhe.png";
import MenuItem from "./MenuItem";
import {
  faTachometerAlt,
  faUser,
  faCalendarAlt,
  faFileAlt,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const currentLocation = useLocation(); // Renamed to avoid conflict

  const handleExpand = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const menuItems = [
    {
      icon: faTachometerAlt,
      title: "Dashboard",
      path: "/",
      subMenu: [
        { title: "Recent Activity", path: "/recent-activity" },
        { title: "Notifications and Alerts", path: "/notifications-alerts" },
      ],
    },
    { icon: faUser, title: "User Roles", path: "/user-roles" },
    {
      icon: faCalendarAlt,
      title: "Event Management",
      path: "/event-management",
    },
    { icon: faFileAlt, title: "Content", path: "/content" },
    {
      icon: faClipboardList,
      title: "Memberships",
      path: "/memberships",
      subMenu: [
        { title: "Recent Activity", path: "/recent-activity" },
        { title: "Notifications and Alerts", path: "/notifications-alerts" },
      ],
    },
    {
      icon: faClipboardList,
      title: "Form Submissions",
      path: "/form-submissions",
      subMenu: [
        { title: "Recent Activity", path: "/recent-activity" },
        { title: "Notifications and Alerts", path: "/notifications-alerts" },
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-primary text-white">
      <div className="w-full h-[10%] max-h-[70px] flexStart p-5  ">
        <img
          src={logo}
          alt="Logo"
          width={200}
          height={50}
          className=" min-w-[150px] object-cover"
        />
      </div>

      <div className="w-full h-[90%] p-2">
        {menuItems.map((menuItem, index) => (
          <NavLink key={index} to={menuItem.path}>
            <MenuItem
              icon={menuItem.icon}
              title={menuItem.title}
              path={menuItem.path}
              isExpanded={expandedMenu === menuItem.title}
              onClick={() => handleExpand(menuItem.title)}
              subMenu={menuItem.subMenu}
              isActive={currentLocation.pathname === menuItem.path}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
