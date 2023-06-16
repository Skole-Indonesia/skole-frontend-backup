import React from "react";
import Navbar from "../../components/layout/Navbar";
import CounselorSidebar from "../../components/layout/CounselorSidebar";

const AllConseling = () => {
  return (
    <>
      <Navbar position={"relative"} />
      <div className="h-screen flex overflow-hidden">
        <CounselorSidebar />
        <div className="container flex-1 overflow-auto">
          <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                Statistik & Data Konseling
              </h1>
              <p className="mt-4 text-gray-500 xl:mt-6">
                Berikut adalah statistik dan data untuk seluruh sesi
                konselingmu.
              </p>

              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                <div className="space-y-3 p-6 border-2 border-blue-400 rounded-xl flex flex-col justify-center items-center">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    Total Sesi Terlaksana
                  </h1>
                  <p className="text-gray-500 text-5xl">4 Sesi</p>
                </div>
                <div className="space-y-3 p-6 border-2 border-blue-400 rounded-xl flex flex-col justify-center items-center">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    Murid Melakukan Konseling
                  </h1>
                  <p className="text-gray-500 text-5xl">4 Murid</p>
                </div>
                <div className="space-y-3 p-6 border-2 border-blue-400 rounded-xl flex flex-col justify-center items-center">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    Total Durasi Sesi
                  </h1>
                  <p className="text-gray-500 text-5xl">4 Jam</p>
                </div>
              </div>
            </div>
          </section>
          <section className="container px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
              <input
                type="text"
                placeholder="Search"
                class="bg-gray-50 w-full py-1.5 text-gray-700 border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-4 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />

              <div className="flex items-center mt-4 gap-x-3">
                <button className="w-1/2 px-5 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto hover:bg-gray-100">
                  Export ke Excel
                </button>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span className="text-base font-semibold text-gray-800">
                              Nama Siswa
                            </span>
                          </th>

                          <th
                            scope="col"
                            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span className="text-base font-semibold text-gray-800">
                              Nama Pendamping
                            </span>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span className="text-base font-semibold text-gray-800">
                              Tanggal & Jam
                            </span>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span className="text-base font-semibold text-gray-800">
                              Status
                            </span>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span className="text-base font-semibold text-gray-800">
                              Link Meet
                            </span>
                          </th>

                          <th scope="col" className="relative py-3.5 px-4">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            Ardit Pratama
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            Anita Putri
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            24-04-2023 | 14.00
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="border border-blue-300 p-2 rounded-lg text-blue-400">
                              Akan Datang
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            Zoom.us/10
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            Ardit Pratama
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            Anita Putri
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            24-04-2023 | 14.00
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="border border-blue-300 p-2 rounded-lg text-blue-400">
                              Akan Datang
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            Zoom.us/10
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            Ardit Pratama
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            Anita Putri
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            24-04-2023 | 14.00
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="border border-blue-300 p-2 rounded-lg text-blue-400">
                              Akan Datang
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            Zoom.us/10
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            Ardit Pratama
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            Anita Putri
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            24-04-2023 | 14.00
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="border border-blue-300 p-2 rounded-lg text-blue-400">
                              Akan Datang
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            Zoom.us/10
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            Ardit Pratama
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            Anita Putri
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            24-04-2023 | 14.00
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="border border-blue-300 p-2 rounded-lg text-blue-400">
                              Akan Datang
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            Zoom.us/10
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            Ardit Pratama
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            Anita Putri
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            24-04-2023 | 14.00
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="border border-blue-300 p-2 rounded-lg text-blue-400">
                              Akan Datang
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            Zoom.us/10
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            Ardit Pratama
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            Anita Putri
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            24-04-2023 | 14.00
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="border border-blue-300 p-2 rounded-lg text-blue-400">
                              Akan Datang
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            Zoom.us/10
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            Ardit Pratama
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            Anita Putri
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            24-04-2023 | 14.00
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="border border-blue-300 p-2 rounded-lg text-blue-400">
                              Akan Datang
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            Zoom.us/10
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            Ardit Pratama
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            Anita Putri
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            24-04-2023 | 14.00
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="border border-blue-300 p-2 rounded-lg text-blue-400">
                              Akan Datang
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            Zoom.us/10
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            Ardit Pratama
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            Anita Putri
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            24-04-2023 | 14.00
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="border border-blue-300 p-2 rounded-lg text-blue-400">
                              Akan Datang
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            Zoom.us/10
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <a
                href="#"
                className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>previous</span>
              </a>

              <div className="items-center hidden md:flex gap-x-3">
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                >
                  3
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                >
                  ...
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                >
                  12
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                >
                  13
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                >
                  14
                </a>
              </div>

              <a
                href="#"
                className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
              >
                <span>Next</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AllConseling;
