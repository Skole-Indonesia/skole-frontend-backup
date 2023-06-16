import React from "react";

const ScheduleCounselor = () => {
  return (
    <section className="bg-slate-300">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 mt-10">
          <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
            <div>
              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
                Jadwal dan Konseling
              </h1>
              <p className="mt-3 text-gray-500">
                Pastikan memilih waktu luang yang kamu miliki agar sesi
                konseling bisa digunakan secara maksimal.
              </p>
            </div>
            <form>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Pilih Jadwal Konseling
                </label>
                <input
                  type="text"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </form>
          </div>
          <div>
            <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8 mb-6">
              <div>
                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
                  Pilih Konselor
                </h1>
                <p className="mt-3 text-gray-500">
                  Konselor yang ditampilkan adalah konselor yang tersedia pada
                  jadwal yang telah kamu pilih. Jika konselor yang ditampilkan
                  tidak sesuai apa yang kamu harapkan, kamu bisa mengubah jadwal
                  konselingmu kembali untuk melihat konselor tersedia lainnya.
                </p>
                <p className="mt-3 text-gray-500">
                  Menampilkan 3 konselor tersedia sesuai dengan jadwal yang
                  telah kamu pilih.
                </p>
              </div>
              <form>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Masukkan hal yang ingin didiskusikan dengan konselor
                  </label>
                  <textarea
                    className="block w-full h-8 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-14 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCounselor;
