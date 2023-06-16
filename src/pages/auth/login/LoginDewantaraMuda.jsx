import { React, createRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../context/ContextProvider";
import LoginForm from "../../../components/auth/LoginForm";

const LoginDewantaraMuda = () => {
  const emailRef = createRef();
  const passwordRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);
  // const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/dewantara-muda-login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.authorisation.token);
        // navigate("/s/dashboard");
        window.location.href="/dewantara-muda/dashboard"
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
        setMessage("Email atau Password salah!");
      });
  };
  return (
    <LoginForm
      onSubmit={onSubmit}
      emailRef={emailRef}
      passwordRef={passwordRef}
      message={message}
      redirect="/register/dewantara-muda"
    />

    // <div className="bg-white">
    //   <div className="flex justify-center h-screen">
    //     <div className="flex items-center w-full max-w-2xl px-6 mx-auto lg:w-6/12">
    //       <div className="flex-1 w-full">
    //         <div className="text-center">
    //           <h1 className="text-primary font-semibold text-3xl">Masuk</h1>
    //           <p className="mt-3 text-neutral font-normal text-lg">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //             Praesentium, sint.
    //           </p>
    //           {message && (
    //             <h1 className="text-red-500 font-semibold">{message}</h1>
    //           )}
    //         </div>
    //         <div className="mt-8">
    //           <form onSubmit={onSubmit}>
    //             <div className="mt-6">
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm text-gray-600"
    //               >
    //                 Email
    //               </label>
    //               <input
    //                 ref={emailRef}
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //                 className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //               />
    //             </div>
    //             <div className="mt-6">
    //               <label
    //                 htmlFor="password"
    //                 className="block mb-2 text-sm text-gray-600"
    //               >
    //                 Password
    //               </label>
    //               <input
    //                 ref={passwordRef}
    //                 type="text"
    //                 name="password"
    //                 id="password"
    //                 className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //               />
    //             </div>
    //             <div className="mt-6">
    //               <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
    //                 Masuk
    //               </button>
    //             </div>
    //           </form>
    //           <p className="mt-6 text-sm text-center text-gray-400">
    //             Sudah mempunyai akun?{" "}
    //             <Link
    //               to="/masuk/dewantara-muda"
    //               className="text-blue-500 focus:outline-none focus:underline hover:underline"
    //             >
    //               Masuk
    //             </Link>
    //             .
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="hidden bg-cover lg:block lg:w-6/12"
    //       style={{
    //         backgroundImage:
    //           "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
    //       }}
    //     >
    //       <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
    //         <div>
    //           <h2 className="text-2xl font-bold text-white sm:text-3xl">
    //             Meraki UI
    //           </h2>
    //           <p className="max-w-xl mt-3 text-gray-300">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
    //             autem ipsa, nulla laboriosam dolores, repellendus perferendis
    //             libero suscipit nam temporibus molestiae
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LoginDewantaraMuda;
