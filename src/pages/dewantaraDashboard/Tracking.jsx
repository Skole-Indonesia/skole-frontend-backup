import React from "react";
import Navbar from "../../components/layout/Navbar";
import DewantaraSidebar from "../../components/layout/DewantaraSidebar";
import { Link } from "react-router-dom";
import BenefitIcon2 from "../../assets/landingpage/benefitIcon2.svg";

const Dashboard = () => {
  return (
    <>
      <Navbar position={"relative"} />
      <div className="h-screen flex overflow-hidden">
        <DewantaraSidebar />
        <div className="container flex-1 overflow-auto">
          <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
              <div className="items-start lg:flex">
                <div className="w-full lg:w-3/5">
                  <div className="lg:max-w-lg">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                      Tracking Pembelajaran Siswa
                    </h1>
                    <p className="mt-4 text-gray-500 xl:mt-6 mb-12">
                      Tracking pembelajaran siswa merupakan fitur yang membantu
                      guru dalam memberikan evaluasi kepada siswa selama
                      kegiatan pembelajaran berlangsung agar siswa mengetahui
                      minat, bakat, dan keterampilan yang dimilikinya.
                    </p>
                    <Link to="/dewantara-muda/tracking-pembelajaran/daftar-siswa" className="text-sm w-1/2 md:w-auto font-medium bg-primary rounded-lg hover:bg-blue-500 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                      Daftar Siswa
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/5">
                  <img
                    className="w-full h-full lg:max-w-3xl"
                    src={BenefitIcon2}
                    alt="Skole Icon"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
