import React, { useState } from "react";
import uberLogo from "../assets/uberLogo.png";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <img className="w-16 mb-10 ml-1" src={uberLogo} alt="uber-logo" />
          <h3 className="text-base font-inter font-medium mb-2">
            What's your name
          </h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 mt-1 py-2  text-lg placeholder:text-sm"
              type="text"
              placeholder="First name"
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 mt-1 py-2  text-lg placeholder:text-sm"
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-base font-inter font-medium mb-2">
            What's your email
          </h3>
          <input
            required
            className="bg-[#eeeeee] rounded mb-6 px-4 mt-1 py-2  w-full text-lg placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
          ></input>
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 mt-1 py-2  w-full text-lg placeholder:text-sm"
            type="password"
            placeholder="password"
          ></input>
          <button className="bg-[#111] text-[#fff] font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-sm">
            Login
          </button>
        </form>
        <p className="text-center mb-2">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
