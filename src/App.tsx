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
    <section className="w-auto h-max min-h-screen flex  bg-red-400">
      {/*this is bg-red to see what's happening on small screens since the side bar 
      has min-h theres scroll horizontal, if we want to fix it and want the website on 
      tablets too w have to fix the sidebar sizes or make the text hidden and show the isons like a dropleft*/}
      <div className="w-[20%] min-w-[280px]">
        <Sidebar />
      </div>
      <div className=" w-[80%] h-auto flexStart bg-third flex-col">
        <Topbar />

        <div className=" w-fit   p-10 ">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/recent-activity" element={<RecentActivity />} />
            <Route path="/notifications-alerts" element={<Notification />} />
            <Route path="/user-roles" element={<UserRoles />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default App;
