// import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-100 text-center h-full">
        <div className="">
          <h1 className="text-9xl font-semibold text-center mb-4">
            <span className="text-gray-900">4</span>
            <span className="bg-gradient-to-r from-pink-700 to-purple-800 inline-block text-transparent bg-clip-text">
              0
            </span>
            <span className="text-gray-900">4</span>
          </h1>
          <p className="item-center text-gray-800 text-2xl font-semibold">
            The page you requested could not be found.
          </p>
          <p className="item-center text-gray-800 text-2xl	font-semibold mt-1 mb-1">
            Click the button to go back
          </p>
          <Link to="/">
            <button className="inline-flex items-center justify-center w-48 px-2 py-3 mt-4 font-medium text-xl text-white rounded-md shadow bg-gradient-to-r from-pink-700 to-purple-800">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Missing;
