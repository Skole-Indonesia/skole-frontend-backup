import React from "react";

const PeronalInformationPayment = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
            <div>
              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
                Data Diri
              </h1>
              <p className="mt-3 text-gray-500">
                Pastikan data pribadimu sudah sesuai. Jika terdapat kesalahan,
                kamu bisa mengubahnya dengan klik Edit Data.
              </p>
            </div>
            <form>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Gender
                </label>
                <input
                  type="text"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Tanggal, Bulan, dan Tahun Lahir
                </label>
                <input
                  type="text"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600">
                  No.HP / Whatsapp
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
          </div>
          <div>
          <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8 mb-6">
            <div>
              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
                Topik Konseling
              </h1>
              <p className="mt-3 text-gray-500">
                Masukkan topik atau hal yang ingin kamu konsultasikan dengan
                konselor. Atau, jika saat ini masih bingung namun ingin
                berkonsultasi, silahkan klik pada pilihan Saya ingin
                mendiskusikannya secara spontan dengan konselor.
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
          <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
            <div>
              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
                Pendamping Konseling
              </h1>
              <p className="mt-3 text-gray-500">
              Pada sesi konseling, kamu bisa memilih untuk didampingi oleh orang lain atau konseling secara mandiri.
              </p>
            </div>
            <form>
              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600">
                Jika kamu memutuskan untuk didampingi, masukkan nama pendampingmu.
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

export default PeronalInformationPayment;
