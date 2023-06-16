import React from "react";
import Navbar from "../../components/layout/Navbar";
import CounselorSidebar from "../../components/layout/CounselorSidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar position={"relative"} />
      <div className="h-screen flex overflow-hidden">
        <CounselorSidebar />
        <div className="container flex-1 overflow-auto">
          <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                Jadwal Anda
              </h1>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
