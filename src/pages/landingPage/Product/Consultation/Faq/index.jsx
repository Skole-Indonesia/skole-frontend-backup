import React from "react";

const index = ({title, description, image}) => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-gray-600">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-3xl"
            src={image}
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
