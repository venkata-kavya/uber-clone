import React from "react";
import uberCar from "../assets/uberCar.png";
import uberBike from "../assets/uberBike.png";
import uberAuto from "../assets/uberAuto.png";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-2 px-1">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full items-center justify-between p-3 border-gray-100 active:border-black active:border-2 rounded-xl"
      >
        <img className="h-10" src={uberCar} alt="car" />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            UberGo{" "}
            <span>
              <i className="ri-user-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="text-gray-600 text-xs">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">$29.30</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full items-center justify-between p-3 border-gray-100 active:border-black active:border-2 rounded-xl"
      >
        <img className="h-14" src={uberBike} alt="car" />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            Moto{" "}
            <span>
              <i className="ri-user-fill">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="text-gray-600 text-xs">Affordable, motorcycle ride</p>
        </div>
        <h2 className="text-lg font-semibold">$9.30</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full items-center justify-between p-3 border-gray-100 active:border-2 active:border-black rounded-xl"
      >
        <img className="h-14" src={uberAuto} alt="car" />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            UberAuto{" "}
            <span>
              <i className="ri-user-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="text-gray-600 text-xs">Affordable, auto rides</p>
        </div>
        <h2 className="text-lg font-semibold">$19.30</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
