import React from "react";
import uberLogo from "../assets/uberLogo.png";

const UserLogin = () => {
  return (
    <div className="p-7">
      <form>
        <img className="w-16 mb-10 ml-1" src={uberLogo} alt="uber-logo" />
        <h3 className="text-lg font-inter font-medium mb-2">
          What's your email
        </h3>
        <input
          required
          className="bg-[#eeeeee] mb-7 rounded px-4 mt-1 py-2  w-full text-lg placeholder:text-base"
          type="email"
          placeholder="email@example.com"
        ></input>
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          required
          className="bg-[#eeeeee] mb-7 rounded px-4 mt-1 py-2  w-full text-lg placeholder:text-base"
          type="password"
          placeholder="password"
        ></input>
        <button className="bg-[#111] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
