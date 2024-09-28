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
    <section className="w-full h-screen flex bg-third">
      <div className="fixed w-[17%] h-full">
        <Sidebar />
      </div>

      <div className="w-[83%] flex flex-col ml-[17%]">
        <div className="fixed top-0 left-[17%] w-[83%] z-10">
          <Topbar />
        </div>

        <div className="flex-1 pt-24 p-5 overflow-auto">
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
