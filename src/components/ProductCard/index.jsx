import React from "react";
import { Link } from "react-router-dom";

const index = ({image, title, description, redirect}) => {
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg">
      <img
        className="object-cover w-full h-56"
        src={image}
        alt="avatar"
      />

      <div className="py-5 px-4 text-justify">
        <h2 className="block text-xl font-bold text-gray-800">
          {title}
        </h2>
        <p className="text-sm text-gray-700">{description}</p>
        {/* <Link to={`/${redirect}`}>Lihat selengkapnya</Link> */}
        <a
        href="#"
        className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
      >
        <span className="mx-1">Selengkapnya</span>
        <svg
          className="w-4 h-4 mx-1 rtl:-scale-x-100"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      </div>
    </div>
  );
};

export default index;
