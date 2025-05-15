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

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src={uberMap}
          alt="uber-map"
        />
      </div>
    </div>
  );
};

export default CaptainRiding;
