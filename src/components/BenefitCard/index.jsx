import React from "react";

const index = ({image, title, description}) => {
  return (
    <div className="flex flex-col items-center p-4 space-y-3 text-center hover:bg-gray-100 rounded-xl">
      <img src={image} alt="" />

      <h1 className="text-xl font-semibold text-gray-700 capitalize">
        {title}
      </h1>

      <p className="text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default index;
