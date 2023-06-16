import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client.js";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../assets/logoWithBadge.svg";

const index = ({position}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  const { user, token, setUser, setToken, notification } = useStateContext();

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.get("/dewantara-muda-logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  return (
    // <nav className="bg-primary shadow relative z-50 w-full">
    <nav className={`${position} bg-primary shadow z-50 w-full`}>
      <div className="container-fluid px-6 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="w-auto h-12 sm:h-20" src={Logo} alt="Logo Skole" />
          </Link>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <div className="hidden inset-x-0 z-20 w-full px-6 transition-all duration-300 ease-in-out bg-[#246DFF] md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              className="my-2 text-slate-200 transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0"
              to="/beranda"
            >
              Home
            </Link>
            <div
              onMouseLeave={() => setOpen(false)}
              className="relative my-2 text-slate-200 transition-colors
            duration-300 transform hover:text-white hover:bg-primary md:mx-4 md:my-0"
            >
              <button
                onMouseOver={() => setOpen(true)}
                className="flex items-center gap-x-1"
              >
                Produk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <ul
                className={`absolute right-0 w-40 py-2 mt-0 rounded-lg shadow-xl ${
                  open ? "block bg-blue-500" : "hidden"
                }`}
              >
                <li className="flex w-full items-center px-3 py-2 text-sm text-white hover:bg-primary">
                  <Link to="/coming-soon">Classroom</Link>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-primary">
                  <Link to="/coming-soon">Live Class</Link>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-primary">
                  <Link to="/konsultasi">Konsultasi</Link>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-primary">
                  <Link to="/coming-soon">Rank Board</Link>
                </li>
              </ul>
            </div>
            <Link
              className="my-2 text-slate-200 transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0"
              to="/artikel"
            >
              Artikel
            </Link>
            <Link
              className="my-2 text-slate-200 transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0"
              to="/tentang-kami"
            >
              Tentang Kami
            </Link>
            <Link
              className="my-2 text-slate-200 transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0"
              to="/kontak"
            >
              Kontak
            </Link>
          </div>
        </div>

        <div className="flex gap-x-2 items-center">
          {!token && (
            <Link
              className="text-sm w-1/2 md:w-auto font-medium bg-slate-100 rounded-lg hover:bg-white text-primary px-4 py-2.5 duration-300 transition-colors focus:outline-none"
              to="/register"
            >
              Daftar
            </Link>
          )}
          {!token && (
            <Link
              className="my-2 text-slate-200 transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0"
              to="/masuk"
            >
              Masuk
            </Link>
          )}

          {token && (
            <button
              className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block hover:text-slate-200 focus:text-slate-200 focus:outline-none"
              aria-label="show notifications"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          )}
          {token && (
            <Link to="/dashboard" className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </Link>
          )}
        </div>

        {isOpen && (
          <div className="md:hidden inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#246DFF] md:mt-0 md:p-0 md:top-0 md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <a
                className="my-2 text-slate-200 transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0"
                to="/beranda"
              >
                Home
              </a>
              <div
                onMouseLeave={() => setOpen(false)}
                className="relative text-slate-200 transition-colors
            duration-300 transform hover:text-white md:my-0"
              >
                <button onMouseOver={() => setOpen(true)}>Produk</button>
                <ul
                  className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
                    open ? "block" : "hidden"
                  }`}
                >
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                    Classroom
                  </li>
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                    Live Class
                  </li>
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                    Dropdown List 3
                  </li>
                </ul>
              </div>
              <a
                className="my-2 text-slate-200 transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0"
                to="#"
              >
                Artikel
              </a>
              <a
                className="my-2 text-slate-200 transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0"
                to="#"
              >
                Tentang Kami
              </a>
              {!token && (
                <Link
                  className="my-2 text-slate-200 transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0"
                  to="/masuk"
                >
                  Masuk
                </Link>
              )}
              {!token && (
                <Link
                  className="my-2 text-slate-200 transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0"
                  to="/register"
                >
                  Daftar
                </Link>
              )}
              {token && (
                <button
                  className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block hover:text-slate-200 focus:text-slate-200 focus:outline-none"
                  aria-label="show notifications"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              )}
              {token && (
                <div
                  onMouseLeave={() => setOpen(false)}
                  className="relative my-2 text-slate-200 transition-colors
            duration-300 transform hover:text-white md:mx-4 md:my-0"
                >
                  <button
                    onMouseOver={() => setOpen(true)}
                    className="w-8 h-8 overflow-hidden border-2 border-gray-400
              rounded-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </button>
                  <ul
                    className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    <a onClick={onLogout} className="btn-logout" to="#">
                      Logout
                    </a>

                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                      Profile
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default index;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleMenu() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="text-white text-2xl font-bold">
//               Logo
//             </Link>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   Home
//                 </Link>
//                 <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   About
//                 </Link>
//                 <Link to="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   Services
//                 </Link>
//                 <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   Contact
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button onClick={toggleMenu} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <XIcon className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               Home
//             </Link>
//             <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               About
//             </Link>
//             <Link to="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               Services
//             </Link>
//             <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
