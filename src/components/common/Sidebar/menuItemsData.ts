// src/components/Sidebar/menuItems.ts
import {
    faTachometerAlt,
    faUser,
    faCalendarAlt,
    faFileAlt,
    faClipboardList,
  } from "@fortawesome/free-solid-svg-icons";
  
  const menuItemsData = [
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
  
  export default menuItemsData;
  