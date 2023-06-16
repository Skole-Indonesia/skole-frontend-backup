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
                <div className="w-full lg:w-full">
                  <div className="lg:max-w-lg">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl mb-12">
                      Rekap Evaluasi Siswa
                    </h1>{" "}
                  </div>
                  <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span className="text-base font-semibold text-gray-800">
                              Nomor
                            </span>
                          </th>

                          <th
                            scope="col"
                            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span className="text-base font-semibold text-gray-800">
                              Hari / Tanggal
                            </span>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span className="text-base font-semibold text-gray-800">
                              Evaluasi
                            </span>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span className="text-base font-semibold text-gray-800">
                              Aksi
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            1
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            15 Januari 2023
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          Lebih dipertahankan lagi prestasi belajarnya agar dapat menuju kesuksesan dan mudah untuk menggapai cita citanya.
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <Link to="isi-evaluasi" className="border border-blue-300 p-2 rounded-lg text-white bg-primary">
                              Edit
                            </Link>
                            <Link to="hapus-evaluasi" className="border border-blue-300 p-2 rounded-lg text-white bg-red-500">
                              Hapus
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            2
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            22 Januari 2023
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          Lebih dipertahankan lagi prestasi belajarnya agar dapat menuju kesuksesan dan mudah untuk menggapai cita citanya.
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <Link to="isi-evaluasi" className="border border-blue-300 p-2 rounded-lg text-white bg-primary">
                              Edit
                            </Link>
                            <Link to="hapus-evaluasi" className="border border-blue-300 p-2 rounded-lg text-white bg-red-500">
                              Hapus
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            3
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            15 Januari 2023
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          Lebih dipertahankan lagi prestasi belajarnya agar dapat menuju kesuksesan dan mudah untuk menggapai cita citanya.
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <Link to="isi-evaluasi" className="border border-blue-300 p-2 rounded-lg text-white bg-primary">
                              Edit
                            </Link>
                            <Link to="hapus-evaluasi" className="border border-blue-300 p-2 rounded-lg text-white bg-red-500">
                              Hapus
                            </Link>
                          </td>
                        </tr>


                      </tbody>
                    </table>
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
