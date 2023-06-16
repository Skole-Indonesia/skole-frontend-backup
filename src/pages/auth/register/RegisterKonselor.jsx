import { React, createRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../context/ContextProvider";

const RegisterKonselor = () => {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      nama_lengkap: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      // password_confirmation: passwordConfirmationRef.current.value,
    };
    axiosClient
      .post("/konselor-register", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        setShowModal(true);
        setTimeout("window.location.href=\"/konselor/dashboard\";", 2500);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };
  return (
    <div className="bg-white">
      {showModal && (
        <div className="flex w-full max-w-sm overflow-hidden absolute top-0 right-0 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center w-12 bg-emerald-500">
          <svg
            className="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
          </svg>
        </div>

        <div className="px-4 py-2 -mx-3">
          <div className="mx-3">
            <span className="font-semibold text-emerald-500">
              Berhasil
            </span>
            <p className="text-sm text-gray-600">
            Akun Anda telah terdaftar!
            </p>
          </div>
        </div>
      </div>
      ) }
      <div className="flex justify-center h-screen">
        <div className="flex items-center w-full max-w-2xl px-6 mx-auto lg:w-6/12">
          <div className="flex-1 w-full">
            <div className="text-center">
              <h1 className="text-primary font-semibold text-3xl">
                Daftar Akun mu
              </h1>
              <p className="mt-3 text-neutral font-normal text-lg">
                Ayo, daftarkan akun mu sebagai pembimbing terlebih dahulu!
              </p>
            </div>
            <div className="mt-8">
              <form onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="nama"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    name="nama"
                    id="nama"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Konfirmasi Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Register
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-center text-gray-400">
                Sudah mempunyai akun?{" "}
                <Link
                  to="/masuk/dewantara-muda"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Masuk
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div
          className="hidden bg-cover lg:block lg:w-6/12"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Meraki UI
              </h2>
              <p className="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterKonselor;
