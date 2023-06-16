import React from "react";
import Navbar from "../../components/layout/Navbar";
import DewantaraSidebar from "../../components/layout/DewantaraSidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar position={"relative"} />
      <div className="h-screen flex overflow-hidden">
        <DewantaraSidebar />
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            Buat Akun Siswa
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6">
            Selamat datang di halaman Buat Akun Siswa! Di sini, kamu dapat
            membuat akun untuk siswa usia sekolah dasar. Akun ini akan memberi
            mereka akses ke semua fitur dan aktivitas pendidikan yang tersedia
            di situs web Skole. Untuk membuat akun siswa, Skole memerlukan
            beberapa informasi dasar tentang siswa, termasuk nama lengkap,
            tanggal lahir, nama sekolah, dan kelas. Harap pastikan bahwa
            informasi yang kamu berikan akurat dan terkini.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-1 xl:grid-cols-1">
            <section className="w-full p-6 bg-white rounded-md shadow-md">
              <div className="card w-full">
                <h2 className="text-lg font-semibold text-gray-700 capitalize">
                  Data Diri Mardika
                </h2>

                <form>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label className="text-gray-700" for="username">
                        Nama Lengkap
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700" for="username">
                        Tempat Lahir
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700" for="username">
                        No. Telepon
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700" for="username">
                        Tanggal Lahir
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700" for="username">
                        No. Telepon Orang Tua
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700" for="username">
                        Asal Sekolah
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700" for="username">
                        Alamat
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700" for="username">
                        Kelas
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="card mt-12">
                <h2 className="text-lg font-semibold text-gray-700 capitalize">
                  Informasi Login Akun
                </h2>

                <form>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <div>
                        <label className="text-gray-700" for="emailAddress">
                          Email
                        </label>
                        <input
                          id="emailAddress"
                          type="email"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="text-gray-700"
                        for="passwordConfirmation"
                      >
                        Password
                      </label>
                      <input
                        id="passwordConfirmation"
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                      <label
                        className="text-gray-700"
                        for="passwordConfirmation"
                      >
                        Konfirmassi Password
                      </label>
                      <input
                        id="passwordConfirmation"
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-gray-600">
                      Buat Akun Siswa
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
