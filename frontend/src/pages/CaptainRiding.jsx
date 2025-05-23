import React from "react";
import { Link } from "react-router-dom";
import uberLogo from "../assets/uberLogo.png";
import uberMap from "../assets/uberMap.png";

const CaptainRiding = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src={uberLogo} alt="" />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src={uberMap}
          alt="uber-map"
        />
      </div>

      <div className="h-1/5 p-10 bg-yellow-400 flex items-center justify-between relative">
        <h5
          className="p-1 text-center w-screen absolute top-0 left-0"
          onClick={() => {}}
        >
          <i className="text-3xl text-gray-900 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
    </div>
  );
};

export default CaptainRiding;
