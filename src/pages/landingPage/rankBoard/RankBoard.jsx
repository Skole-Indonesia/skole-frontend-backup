import React from "react";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

const Classroom = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <section className="flex items-center flex-1 h-[86vh]">
        <div className="flex flex-col w-full ">
          <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500">
              Coming
            </span>

            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500">
              Soon
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias
            nihil incidunt.
          </p>

          <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            <input
              id="email"
              type="text"
              className="px-6 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring sm:mx-2"
              placeholder="Email Address"
            />

            <button className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
              Notify Me
            </button>
          </div>

          <p className="mt-8 text-center text-gray-700 text-md md:text-xl">
            Notify me when App is launched :)
          </p>
        </div>
      </section>
      <footer class="container mx-auto flex flex-col items-center mt-12 sm:flex-row sm:justify-between">
        <a
          href="#"
          class="text-gray-700 transition-colors duration-300 hover:text-blue-500"
        >
          {" "}
          Privacy Policy{" "}
        </a>

        <div class="mt-4 -mx-4 md:mt-0">
          <a
            href="#"
            class="px-4 text-gray-700 transition-colors duration-300 hover:text-blue-500"
          >
            {" "}
            Facebook
          </a>

          <a
            href="#"
            class="px-4 text-gray-700 transition-colors duration-300 hover:text-blue-500"
          >
            Instagram
          </a>

          <a
            href="#"
            class="px-4 text-gray-700 transition-colors duration-300 hover:text-blue-500"
          >
            {" "}
            LinkedIn
          </a>
        </div>
      </footer>
      {/* <Footer /> */}
    </div>
  );
};

export default Classroom;
