import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Topbar from "./components/common/Topbar";
import UserRoles from "./pages/user-roles";
import RecentActivity from "./pages/recent-activity";
import Notification from "./pages/notifications-alerts";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <section className="w-auto h-auto  flex bg-third">
      <div className="fixed top-0 left-0 w-[20%] min-w-[280px] h-screen">
        <Sidebar />
      </div>
      <div className="w-[80%] h-max flex flex-col ml-[20%]">
        <div className="fixed top-0 left-[20%] w-[80%] z-10">
          <Topbar />
        </div>
        <div className="flex py-24 overflow-visible  p-5">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/recent-activity" element={<RecentActivity />} />
            <Route path="/notifications-alerts" element={<Notification />} />
            <Route path="/user-roles" element={<UserRoles />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default App;
