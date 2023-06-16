import React from "react";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar
      position={'relative'} />
      <div className="h-screen flex overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto">DISNI</div>
      </div>
    </>
  );
};

export default Dashboard;
