import React, { useState, useRef } from "react";
import uberLogo from "../assets/uberLogo.png";
import uberMap from "../assets/uberMap.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import uberCar from "../assets/uberCar.png";
import uberBike from "../assets/uberBike.png";
import uberAuto from "../assets/uberAuto.png";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "80%",
          padding: 24,
          opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src={uberLogo}
        alt="uber-logo"
      />
      <div className="w-screen h-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src={uberMap}
          alt="uber-map"
        />
      </div>
      <div className="flex flex-col justify-end absolute h-screen top-0 w-full ">
        <div className="h=[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-[3px] top-[45%] left-10 bg-black opacity-80 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            panelOpen={panelOpen}
            setPanelOpen={setPanelOpen}
            vehiclePanelOpen={vehiclePanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white p-3 py-10 flex flex-col gap-3 translate-y-full"
      >
        <h5
          className="p-1 text-center w-[93%] absolute top-0"
          onClick={() => {
            setVehiclePanelOpen(false);
          }}
        >
          <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-2 px-1">Choose a Vehicle</h3>
        <div className="flex w-full items-center justify-between p-3 border-gray-100 active:border-black active:border-2 rounded-xl">
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

        <div className="flex w-full items-center justify-between p-3 border-gray-100 active:border-black active:border-2 rounded-xl">
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

        <div className="flex w-full items-center justify-between p-3 border-gray-100 active:border-2 active:border-black rounded-xl">
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
    </div>
  );
};

export default Home;
