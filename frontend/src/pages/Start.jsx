import React from "react";
import { Link } from "react-router-dom";
import uberLogo from "../assets/uberLogo.png";
import trafficLight from "../assets/trafficLight.avif";

const Start = () => {
  return (
    <div>
      <div
        className=" h-screen pt-8 w-full flex flex-col justify-between"
        style={{
          backgroundImage: `url(${trafficLight})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img className="w-16 ml-8" src={uberLogo} alt="uber-logo" />
        <div className="bg-white pb-7 px-4 py-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
