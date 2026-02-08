import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-[20%] min-w-[250px] bg-white shadow-lg border-r">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 min-h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
