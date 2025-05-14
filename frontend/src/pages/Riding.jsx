import React from "react";
import uberMap from "../assets/uberMap.png";
import uberCar3d from "../assets/uberCar3d.png";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src={uberMap}
          alt="uber-map"
        />
      </div>

      <div className="h-1/2 p-4 flex flex-col justify-between pt-6 gap-2">
        <div className="flex items-center justify-between ">
          <img className="h-20" src={uberCar3d} alt="uber-car" />
          <div className="text-right">
            <h2 className="text-lg font-medium">Sarthak</h2>
            <h4 className="text-xl font-semibold -mt-1">MP 04 AB 1234</h4>
            <p className="text-sm text-gray-600">Maruthi Suzuki Alto</p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center gap-5 py-3 border-b border-t">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 py-3 border-b">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$27.76</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white font-semibold p-3 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
